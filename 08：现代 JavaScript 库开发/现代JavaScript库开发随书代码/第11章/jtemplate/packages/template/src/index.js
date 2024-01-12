import { type } from '@jslib-book/type';
import { parse } from '@jtemplate/parser';

// function encodeHTML(source) {
//   return String(source)
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/\\/g, '&#92;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#39;');
// }

function compiler(tpl) {
  var mainCode = parse(tpl);

  var headerCode =
    '\n' +
    'var __str__ = "";\n' +
    'var __code__ = "";\n' +
    'for(var key in __data__) {\n' +
    '    __str__+=("var " + key + "=__data__[\'" + key + "\'];");\n' +
    '}\n' +
    'eval(__str__);\n\n';

  var footerCode = '\n;return __code__;\n';

  var code = headerCode + mainCode + footerCode;

  console.log('---------', 'code');
  console.log(code);
  console.log('---------', 'code');
  try {
    var Render = new Function('__data__', code);
    Render.toString = function () {
      return mainCode;
    };
    return Render;
  } catch (e) {
    e.jtemplate = 'function anonymous(__data__) {' + code + '}';
    throw e;
  }
}

function template(tpl, data) {
  if (typeof tpl !== 'string') {
    return '';
  }

  try {
    var render = compiler(tpl);
    return render(type(data) === 'Object' ? data : {});
  } catch (e) {
    console.log(e);
    return 'error';
  }
}

export default template;
