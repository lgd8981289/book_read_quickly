export function parsehtml(html) {
  // 单双引号转义
  html = String(html).replace(/('|")/g, '\\$1');
  const lineList = html.split(/\n/);
  let code = '';
  for (const line of lineList) {
    code += ';__code__ += ("' + line + '")\n';
  }
  return code;
}

export function parsejs(code) {
  code = String(code);

  const reg = /^=(.*)$/;
  let html;
  let arr;

  // =
  // =123 ['=123', '123']
  if ((arr = reg.exec(code))) {
    html = arr[1]; // 输出
    return ';__code__ += (' + html + ')\n';
  }

  //原生js
  return ';' + code + '\n';
}

export function parse(tpl) {
  const [sTag, eTag] = ['<%', '%>'];

  let code = '';

  const segments = String(tpl).split(sTag);

  for (const segment of segments) {
    const tokens = segment.split(eTag);
    if (tokens.length === 1) {
      // html
      // <div></div>
      code += parsehtml(tokens[0]);
    } else {
      // js
      // <%= a%>
      code += parsejs(tokens[0]);
      if (tokens[1]) {
        // js + html
        // <%if () {%> html <%}%>
        code += parsehtml(tokens[1]);
      }
    }
  }

  return code;
}
