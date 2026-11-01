# ⚡ Polyglot Prime Race

A four-way race between **C**, **C#**, **Python**, and **JavaScript** to find the Nth prime number — orchestrated by a Python web server with a slick browser dashboard.

Each language runs its own implementation of the **Sieve of Eratosthenes**. The browser shows real timings, including the JS race happening **in your browser tab**.

## 🎮 How to Play
1. Start the server (see setup below).
2. Open the web app: **[http://127.0.0.1:5000](http://127.0.0.1:5000)**
3. Enter a number for **N** (e.g., `100000`).
4. Click **🏁 Race!**
5. Watch the bars fill up and see which language is the fastest! 🏆

*Pro tip: Try `N = 10` to see startup overhead, and `N = 500000` to see raw compute power!*

## 🛠️ Setup (Arch Linux)

```bash
# 1. Install dependencies
sudo pacman -S base-devel gcc dotnet-sdk python python-pip

# 2. Set up Python environment
python -m venv .venv
source .venv/bin/activate
pip install flask

# 3. Start the server!
python python/server.py
