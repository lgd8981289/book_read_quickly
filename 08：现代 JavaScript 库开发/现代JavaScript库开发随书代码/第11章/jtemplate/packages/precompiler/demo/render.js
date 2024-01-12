/* eslint-disable no-unused-vars */
function render(__data__) {
  var __hasOwnProp__ = {}.hasOwnProperty;

  var list = __hasOwnProp__.call(__data__, 'list')
    ? __data__['list']
    : undefined;

  try {
    var __code__ = '';

    __code__ += '<ul>';
    __code__ += '  ';
    list.forEach((name) => {
      __code__ += '';
      __code__ += '    <li>';
      __code__ += name;
      __code__ += '</li>';
      __code__ += '  ';
    });
    __code__ += '';
    __code__ += '</ul>';
    __code__ += '';

    return __code__;
  } catch (e) {
    console.log(e);
    return 'error';
  }
}
