const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../util/copy");

function init(cmdPath, name, option) {
    if (!option.husky) {
        return;
    }

    console.log("@js-lib/husky: init");

    if (option.commitlint.commitlint) {
        copyTmpl(
            path.resolve(__dirname, `./template/commit-msg.tmpl`),
            path.resolve(cmdPath, name, ".husky/commit-msg"),
            option
        );
    }

    if (option.eslint) {
        copyTmpl(
            path.resolve(__dirname, `./template/.lintstagedrc.js`),
            path.resolve(cmdPath, name, ".lintstagedrc.js"),
            option
        );
    }

    copyTmpl(
        path.resolve(__dirname, `./template/pre-commit.tmpl`),
        path.resolve(cmdPath, name, ".husky/pre-commit"),
        option
    );
    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.init = init;
