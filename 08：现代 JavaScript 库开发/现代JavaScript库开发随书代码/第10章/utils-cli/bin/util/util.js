const fs = require('fs');
const path = require('path');

function travel(dir, callback, excludePath) {
  fs.readdirSync(dir).forEach(function (file) {
    const pathname = path.join(dir, file);

    if (fs.statSync(pathname).isDirectory()) {
      const flag = excludePath.some(function (pattern) {
        return typeof pattern === 'function'
          ? pattern(pathname)
          : pathname.match(pattern);
      });

      // 命中 excludePath
      if (!flag) {
        travel(pathname, callback, excludePath);
      }
    } else {
      callback(pathname);
    }
  });
}

exports.travel = travel;
