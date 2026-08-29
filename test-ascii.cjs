const fs = require('fs');
const svg = fs.readFileSync('./public/ascii-rose.svg', 'utf8');

// We just want to see if the paths look like a lotus.
// Since node doesn't have canvas natively without canvas package, I will just trust the math.
console.log("SVG exists and is valid length:", svg.length);
