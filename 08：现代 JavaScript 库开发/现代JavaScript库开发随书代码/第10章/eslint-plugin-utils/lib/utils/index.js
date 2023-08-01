/**
 * 判断参数是否存在
 * @example ifExist (node, 'parent','id','name')
 * @return （node && node.parent && node.parent.id && node.parent.id.name）
 */
function isExist() {
  let hasAllArguments = true;
  let i = 0;
  let a = arguments[i];

  for (i; i < arguments.length; i++) {
    if (a) {
      a = a[arguments[i + 1]];
    } else {
      hasAllArguments = false;
    }
  }
  return hasAllArguments;
}
module.exports = {
  isExist,
};
