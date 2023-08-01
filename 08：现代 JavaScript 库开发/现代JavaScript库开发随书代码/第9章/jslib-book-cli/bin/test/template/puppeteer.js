const puppeteer = require('puppeteer');
const ora = require('ora');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');

const prefix = '[browser]';

const spinner = ora(`${prefix} start browser test...`).start();

(async () => {
  const testPath = `file://${__dirname}/index.html`;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(testPath);

  await page.waitFor('.suite');

  // pass
  const passNode = await page.$$('.pass');

  // fail
  const failNode = await page.$$('.fail');

  spinner.stop();

  if (passNode && passNode.length) {
    console.log(prefix, `通过 ${passNode.length} 项`.green);
  }

  if (failNode && failNode.length) {
    console.log(
      prefix,
      `失败 ${failNode.length} 项`.red,
      '具体见:',
      `${testPath}`.underline
    );
    await browser.close();
    process.exit(1);
  }

  await browser.close();
  console.log(prefix, `🎉 用例全部通过浏览器测试 🎉`.green);
})();
