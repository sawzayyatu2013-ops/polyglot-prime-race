import sys, time, math, json

def nth_prime(n: int):
    limit = 15 if n < 6 else int(n * (math.log(n) + math.log(math.log(n))) + 10)
    sieve = bytearray(limit + 1)
    count = 0
    last_prime = 0
    for i in range(2, limit + 1):
        if not sieve[i]:
            count += 1
            last_prime = i
            if count == n:
                break
            for j in range(i * i, limit + 1, i):
                sieve[j] = 1
    return last_prime, count

if __name__ == "__main__":
    n = int(sys.argv[1]) if len(sys.argv) > 1 else 100000
    t0 = time.perf_counter()
    prime, count = nth_prime(n)
    ms = (time.perf_counter() - t0) * 1000
    print(json.dumps({"prime": prime, "count": count, "time_ms": round(ms, 3)}))
