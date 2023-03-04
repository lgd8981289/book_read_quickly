export function getParam(name, url) {
  name = String(name);
  url = String(url);
  const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
  if (!results) {
    return '';
  }

  return results[1] || '';
}
