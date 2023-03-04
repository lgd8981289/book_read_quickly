#!/usr/bin/env node
const yargs = require("yargs");
const { runInitPrompts } = require("./run-prompts");
const { init } = require("./init");
const { init: log } = require("./util/log");

log();

yargs
    .usage("usage: jslibbook [options]")
    .usage("usage: jslibbook <command> [options]")
    .example("jslibbook new mylib", "新建一个库 mylib")
    .alias("h", "help")
    .alias("v", "version")
    .command(
        ["new", "n"],
        "新建一个项目",
        function (yargs) {
            return yargs.option("name", {
                alias: "n",
                demand: false,
                default: "mylib",
                describe: "your library name",
                type: "string",
            });
        },
        function (argv) {
            runInitPrompts(argv._[1], yargs.argv).then(function (answers) {
                init(argv, answers);
            });
        }
    )
    .epilog("copyright 2019-2022")
    .demandCommand().argv;
