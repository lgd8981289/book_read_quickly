const path = require("path");
const { copyTmpl, copyFile, mergeTmpl2JSON } = require("../util/copy");

function init(cmdPath, name, option) {
    if (!option.prettier) {
        return;
    }
    
    console.log("@js-lib/prettier: init");

    copyTmpl(
        path.resolve(__dirname, `./template/.prettierignore`),
        path.resolve(cmdPath, name, ".prettierignore"),
        option
    );

    copyFile(
        path.resolve(__dirname, `./template/.prettierrc.json`),
        path.resolve(cmdPath, name, ".prettierrc.json")
    );

    mergeTmpl2JSON(
        path.resolve(__dirname, `./template/package.json.tmpl`),
        path.resolve(cmdPath, name, "package.json"),
        option
    );
}

module.exports.init = init;
