export function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
