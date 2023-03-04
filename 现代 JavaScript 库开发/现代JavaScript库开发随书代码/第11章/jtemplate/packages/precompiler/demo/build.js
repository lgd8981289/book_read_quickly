const { precompile } = require('@jtemplate/precompiler');
const fs = require('fs');

const tmpl = fs.readFileSync('./render.tmpl', { encoding: 'utf-8' });

const code = precompile(tmpl);

fs.writeFileSync('./render.js', code);
