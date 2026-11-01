#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <time.h>

int main(int argc, char *argv[]) {
    int n = argc > 1 ? atoi(argv[1]) : 100000;
    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);

    int limit = n < 6 ? 15 : (int)(n * (log(n) + log(log(n))) + 10);
    bool *sieve = calloc(limit + 1, sizeof(bool));
    int count = 0, last_prime = 0;

    for (int i = 2; i <= limit; i++) {
        if (!sieve[i]) {
            count++;
            last_prime = i;
            if (count == n) break;
            for (long j = (long)i * i; j <= limit; j += i)
                sieve[j] = true;
        }
    }

    clock_gettime(CLOCK_MONOTONIC, &end);
    double ms = (end.tv_sec - start.tv_sec) * 1000.0 + (end.tv_nsec - start.tv_nsec) / 1e6;
    printf("{\"prime\": %d, \"count\": %d, \"time_ms\": %.3f}\n", last_prime, count, ms);
    free(sieve);
    return 0;
}
