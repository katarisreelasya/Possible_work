const fs = require('fs');

function decim(num, base) {
    return parseInt(num, base);
}

function Secret(p) {
    const n = p.length;
    let s = 0;

    for (let i = 0; i < n; i++) {
        let term = p[i].y;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                term *= (-p[j].x) / (p[i].x - p[j].x);
            }
        }
        s += term;
    }
    return Math.round(s);
}



function processInput(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        const input = JSON.parse(data);
        
        const k = input.keys.k;
        const n = input.keys.n;
        
        const p = [];
        let count = 0;
        
        for (const key in input) {
            if (key !== 'keys') {
                const x = parseInt(key);
                const base = parseInt(input[key].base);
                const value = input[key].value;
                const y = decim(value, base);
                
                p.push({ x, y });
                count++;
                
                if (count >= k) break;
            }
        }
        
        p.sort((a, b) => a.x - b.x);
        
        const s = Secret(p);
        console.log(`Secret for ${filename}: ${s}`);
    } catch (err) {
        console.error(`Error processing ${filename}:`, err);
    }
}

processInput('testcase1.json');
processInput('testcase2.json');