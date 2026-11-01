const btn = document.getElementById('race-btn');
const input = document.getElementById('n');
const statusEl = document.getElementById('status');
const resultsEl = document.getElementById('results');
const LANGS = {
    c: { name: 'C', color: '#5a8fd8', emoji: '🔵' },
    csharp: { name: 'C#', color: '#b565d8', emoji: '🟣' },
    python: { name: 'Python', color: '#f0c040', emoji: '🟡' },
    javascript: { name: 'JavaScript', color: '#e9b949', emoji: '🟨' },
};
function nthPrimeJS(n) {
    const limit = n < 6 ? 15 : Math.floor(n * (Math.log(n) + Math.log(Math.log(n))) + 10);
    const sieve = new Uint8Array(limit + 1);
    let count = 0, last = 0;
    for (let i = 2; i <= limit; i++) {
        if (!sieve[i]) {
            count++; last = i;
            if (count === n) break;
            for (let j = i * i; j <= limit; j += i) sieve[j] = 1;
        }
    }
    return last;
}
async function runRace() {
    const n = parseInt(input.value, 10);
    if (!n || n < 10) return;
    statusEl.textContent = `Racing to find prime #${n.toLocaleString()}...`;
    resultsEl.innerHTML = '';
    btn.disabled = true;
    const t0 = performance.now();
    const jsPrime = nthPrimeJS(n);
    const jsTime = performance.now() - t0;
    try {
        const res = await fetch(`/api/race/${n}`);
        const data = await res.json();
        const merged = { ...data.results, javascript: { prime: jsPrime, count: n, time_ms: +jsTime.toFixed(3) } };
        const primeValue = Object.values(merged).find(r => r.prime)?.prime;
        statusEl.textContent = `✓ Prime #${n.toLocaleString()} = ${primeValue.toLocaleString()}`;
        render(merged);
    } catch (e) {
        statusEl.textContent = '❌ Error: ' + e.message;
    } finally {
        btn.disabled = false;
    }
}
function render(results) {
    const entries = Object.entries(results).filter(([, r]) => r.time_ms !== undefined);
    entries.sort((a, b) => a[1].time_ms - b[1].time_ms);
    const maxTime = Math.max(...entries.map(([, r]) => r.time_ms), 1);
    entries.forEach(([key, result], idx) => {
        const lang = LANGS[key];
        if (!lang) return;
        const pct = Math.max(6, (Math.log(result.time_ms + 1) / Math.log(maxTime + 1)) * 100);
        const row = document.createElement('div');
        row.className = 'result-row' + (idx === 0 ? ' winner' : '');
        row.innerHTML = `
            <div class="label">${idx === 0 ? '🏆 ' : ''}${lang.emoji} ${lang.name}</div>
            <div class="bar-container"><div class="bar" style="background:${lang.color}"></div></div>
            <div class="time">${result.time_ms.toFixed(2)} ms</div>
        `;
        resultsEl.appendChild(row);
        requestAnimationFrame(() => { row.querySelector('.bar').style.width = pct + '%'; });
    });
}
btn.addEventListener('click', runRace);
input.addEventListener('keydown', e => { if (e.key === 'Enter') runRace(); });
