/* eslint-disable no-undef */

const tpl1 = `
<div><%= name %></div>
`;

const html1 = template(tpl1, { name: 'yan' });
console.log(html1);

document.getElementById('demo1').innerHTML = html1;

console.log('########################');

const tpl2 = `
<ul>
  <% list.forEach(name => { %>
    <li><%=name%></li>
  <% }) %>
</ul>
`;

const html2 = template(tpl2, { list: ['yan1', 'yan2', 'yan3'] });
console.log(html2);

document.getElementById('demo2').innerHTML = html2;
