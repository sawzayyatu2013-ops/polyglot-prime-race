import os, sys, json, subprocess, time
from flask import Flask, jsonify, send_from_directory

BASE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(BASE)
sys.path.insert(0, BASE)
from primes import nth_prime

app = Flask(__name__, static_folder=os.path.join(ROOT, "web"), static_url_path="")

def ensure_built():
    subprocess.run(["make", "-C", os.path.join(ROOT, "c")], check=True)
    subprocess.run(["dotnet", "build", "-c", "Release", os.path.join(ROOT, "csharp")], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def run_python(n):
    t0 = time.perf_counter()
    prime, count = nth_prime(n)
    return {"prime": prime, "count": count, "time_ms": round((time.perf_counter() - t0) * 1000, 3)}

def run_c(n):
    out = subprocess.check_output([os.path.join(ROOT, "c", "primes"), str(n)])
    return json.loads(out)

def run_csharp(n):
    out = subprocess.check_output(["dotnet", "run", "-c", "Release", "--no-build", "--project", os.path.join(ROOT, "csharp"), "--", str(n)])
    return json.loads(out)

def run_node(n):
    out = subprocess.check_output(["node", os.path.join(ROOT, "node", "primes.js"), str(n)])
    return json.loads(out)

@app.route("/")
def index():
    return send_from_directory(os.path.join(ROOT, "web"), "index.html")

@app.route("/api/race/<int:n>")
def race(n):
    results = {}
    for name, fn in [("c", run_c), ("csharp", run_csharp), ("node", run_node), ("python", run_python)]:
        try:
            results[name] = fn(n)
        except Exception as e:
            results[name] = {"error": str(e)}
    return jsonify({"n": n, "results": results})

if __name__ == "__main__":
    ensure_built()
    app.run(host="127.0.0.1", port=5000, debug=False)
