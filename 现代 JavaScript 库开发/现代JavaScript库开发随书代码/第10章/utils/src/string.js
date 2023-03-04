export function truncate(str, len, omission = '...') {
  str = String(str);
  omission = String(omission);
  len = Math.round(len);

  if (isNaN(len)) {
    return '';
  }

  if (str.length > len) {
    str = str.slice(0, len - omission.length) + omission;
  }

  return str;
}
