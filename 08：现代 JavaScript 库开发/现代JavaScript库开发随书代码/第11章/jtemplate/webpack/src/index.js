import render from './demo.tmpl';

const html = render({ list: ['yan1', 'yan2', 'yan3'] });

document.getElementById('demo1').innerHTML = html;
