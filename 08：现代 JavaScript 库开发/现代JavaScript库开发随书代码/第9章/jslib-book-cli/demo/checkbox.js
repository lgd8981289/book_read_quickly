const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "checkbox",
            message: "请选择喜欢的水果:",
            name: "fruits",
            choices: ["苹果", "香蕉", "梨子"],
            default: ["苹果"],
            filter: function (vals) {
                const map = {
                    苹果: "apple",
                    香蕉: "pear",
                    梨子: "banana",
                };

                return vals.map((val) => map[val]);
            },
        },
    ])
    .then((answers) => {
        console.log("结果为:");
        console.log(answers);
    });
