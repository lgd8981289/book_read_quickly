const path = require("path");
const { copyDir, copyTmpl } = require("../util/copy");

function init(cmdPath, name, option) {
    console.log("@js-lib/root: init");

    // init root
    copyDir(
        path.resolve(__dirname, `./template/base`),
        path.resolve(cmdPath, name)
    );

    // init readme
    copyTmpl(
        path.resolve(__dirname, `./template/README.md.tmpl`),
        path.resolve(cmdPath, name, "README.md"),
        option
    );

    // init license
    copyTmpl(
        path.resolve(__dirname, `./template/license.tmpl`),
        path.resolve(cmdPath, name, "LICENSE"),
        option
    );

    // init package
    copyTmpl(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, 'package.json'),
        option,
    );
}

module.exports.init = init;
