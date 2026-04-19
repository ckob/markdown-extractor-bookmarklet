const fs = require('fs');

// Read the minified files
const cdnCode = fs.readFileSync('dist/bookmarklet-cdn.min.js', 'utf8');
const bundledCode = fs.readFileSync('dist/bookmarklet-bundled.min.js', 'utf8');

// Encode them safely into single-line URLs
const cdnUrl = 'javascript:' + encodeURIComponent(cdnCode);
const bundledUrl = 'javascript:' + encodeURIComponent(bundledCode);

// Save them as text files you can easily copy-paste
fs.writeFileSync('dist/cdn-url.txt', cdnUrl);
fs.writeFileSync('dist/bundled-url.txt', bundledUrl);

console.log('Successfully generated copy-pasteable URLs!');
