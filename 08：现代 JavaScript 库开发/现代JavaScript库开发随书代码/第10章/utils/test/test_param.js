var expect = require('expect.js');
var { getParam } = require('../src/index.js');

const urlList = [
  {
    value: 'name',
    url: 'http://localhost:8888/test.html?name=张三&id=123',
    expectation: '张三',
  },
  {
    value: 'random',
    url: 'http://localhost:8888/test.html?name=张三&id=123',
    expectation: '',
  },
];

describe('测试功能', function () {
  it('参数(id)的值', function () {
    urlList.forEach((item) => {
      expect(getParam(item.value, item.url)).to.be.equal(item.expectation);
    });
  });
});
