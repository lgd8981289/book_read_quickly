const path = require("path");
const { copyTmpl, copyFile, mergeTmpl2JSON } = require("../util/copy");

function init(cmdPath, name, option) {
    console.log("@js-lib/build: init");

    copyTmpl(
        path.resolve(__dirname, `./template/rollup.js.tmpl`),
        path.resolve(cmdPath, name, "config/rollup.js"),
        option
    );

    copyFile(
        path.resolve(__dirname, `./template/rollup.config.aio.js`),
        path.resolve(cmdPath, name, "config/rollup.config.aio.js")
    );

    copyFile(
        path.resolve(__dirname, `./template/rollup.config.esm.js`),
        path.resolve(cmdPath, name, "config/rollup.config.esm.js")
    );

    copyFile(
        path.resolve(__dirname, `./template/rollup.config.js`),
        path.resolve(cmdPath, name, "config/rollup.config.js")
    );

    copyTmpl(
        path.resolve(__dirname, `./template/.babelrc.tmpl`),
        path.resolve(cmdPath, name, ".babelrc"),
        option
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.init = init;
