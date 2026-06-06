const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'dist', 'client');
const assetsDir = path.join(clientDir, 'assets');

if (!fs.existsSync(clientDir) || !fs.existsSync(assetsDir)) {
  console.warn('dist/client or assets not found — skipping index generation');
  process.exit(0);
}

const files = fs.readdirSync(assetsDir);
const css = files.find((f) => f.startsWith('styles-') && f.endsWith('.css')) || '';
const jsFiles = files.filter((f) => f.endsWith('.js') && f.startsWith('index-'));

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dhakshatha — Portfolio</title>
    ${css ? `<link rel="stylesheet" href="./assets/${css}">` : ''}
  </head>
  <body>
    <div id="root"></div>
    ${jsFiles.map((f) => `<script type="module" src="./assets/${f}"></script>`).join('\n    ')}
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, 'index.html'), html, 'utf8');
console.log('Generated dist/client/index.html');
