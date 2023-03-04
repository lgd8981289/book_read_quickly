/* eslint-disable no-undef */

console.log(
  parser.parse(`
<div>
  <span></span>
</div>
`)
);

console.log('--------');

console.log(
  parser.parse(`
  <div><%= name %></div>
  `)
);

console.log('--------');

console.log(
  parser.parse(`
<div>
  <% list.forEach(name => { %>
    <%=name%>
  <% }) %>
<div>
`)
);
