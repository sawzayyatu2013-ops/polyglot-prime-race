const n = parseInt(process.argv[2]) || 100000;
const start = process.hrtime.bigint();
const limit = n < 6 ? 15 : Math.floor(n * (Math.log(n) + Math.log(Math.log(n))) + 10);
const sieve = new Uint8Array(limit + 1);
let count = 0, lastPrime = 0;
for (let i = 2; i <= limit; i++) {
    if (!sieve[i]) {
        count++; lastPrime = i;
        if (count === n) break;
        for (let j = i * i; j <= limit; j += i) sieve[j] = 1;
    }
}
const end = process.hrtime.bigint();
const ms = Number(end - start) / 1e6;
console.log(JSON.stringify({ prime: lastPrime, count: count, time_ms: Number(ms.toFixed(3)) }));
