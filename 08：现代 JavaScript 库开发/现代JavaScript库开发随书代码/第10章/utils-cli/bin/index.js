#!/usr/bin/env node
const path = require('path');
const yargs = require('yargs');

const { analyse } = require('./analyse');

yargs
  .usage('usage: utils [options]')
  .usage('usage: utils <command> [options]')
  .alias('h', 'help')
  .command(
    'analyse',
    '统计项目中使用utils的情况',
    function (yargs) {
      return yargs.option('output', {
        alias: 'O',
        demand: false,
        default: false,
        type: 'boolean',
        describe: '是否输出结果到文件',
      });
    },
    function (argv) {
      // 运行命令
      analyse(argv);
    }
  )
  .epilog('copyright 2022')
  .demandCommand().argv;
