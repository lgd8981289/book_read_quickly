const path = require("path");
const { copyTmpl, mergeTmpl2JSON } = require("../util/copy");

function init(cmdPath, name, option) {
    if (!option.eslint) {
        return;
    }
    
    console.log("@js-lib/eslint: init");
    
    copyTmpl(
        path.resolve(__dirname, `./template/.eslintignore`),
        path.resolve(cmdPath, name, ".eslintignore")
    );

    copyTmpl(
        path.resolve(__dirname, `./template/.eslintrc.js.tmpl`),
        path.resolve(cmdPath, name, ".eslintrc.js"),
        option
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.init = init;
