using System;
using System.Diagnostics;

class Primes {
    static void Main(string[] args) {
        int n = args.Length > 0 ? int.Parse(args[0]) : 100000;

        var sw = Stopwatch.StartNew();

        int limit = n < 6 ? 15
            : (int)(n * (Math.Log(n) + Math.Log(Math.Log(n))) + 10);
        var sieve = new bool[limit + 1];
        int count = 0, lastPrime = 0;

        for (int i = 2; i <= limit; i++) {
            if (!sieve[i]) {
                count++;
                lastPrime = i;
                if (count == n) break;
                for (long j = (long)i * i; j <= limit; j += i)
                    sieve[j] = true;
            }
        }

        sw.Stop();
        Console.WriteLine(
            $"{{\"prime\": {lastPrime}, \"count\": {count}, \"time_ms\": {sw.Elapsed.TotalMilliseconds:F3}}}");
    }
}
