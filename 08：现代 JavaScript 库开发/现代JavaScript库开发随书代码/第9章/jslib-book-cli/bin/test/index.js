const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../util/copy");

function init(cmdPath, name, option) {
    if (!option.test.mocha) {
        return;
    }

    console.log("@js-lib/test: init");

    copyTmpl(
        path.resolve(__dirname, `./template/.nycrc`),
        path.resolve(cmdPath, name, ".nycrc")
    );

    copyTmpl(
        path.resolve(__dirname, `./template/index.html.tmpl`),
        path.resolve(cmdPath, name, "test/browser/index.html"),
        option
    );

    copyTmpl(
        path.resolve(__dirname, `./template/test.js`),
        path.resolve(cmdPath, name, "test/test.js"),
        option
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );

    if (option.test.puppeteer) {
        copyTmpl(
            path.resolve(__dirname, `./template/puppeteer.js`),
            path.resolve(cmdPath, name, "test/browser/puppeteer.js")
        );
    }
}

module.exports.init = init;
