const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "仓库的名字",
            default: "mylib",
            validate: function (input) {
                if (input.match(/\s+/g)) {
                    return "名字中不能包含空格";
                }
                return true;
            },
        },
    ])
    .then((answers) => {
        console.log("结果为:");
        console.log(answers);
    });