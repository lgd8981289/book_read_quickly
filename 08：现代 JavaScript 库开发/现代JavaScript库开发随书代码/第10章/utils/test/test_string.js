var expect = require('expect.js');
var { truncate } = require('../src/index.js');

describe('测试功能', function () {
  it('异常', function () {
    expect(truncate()).to.be.equal('');
    expect(truncate('')).to.be.equal('');
    expect(truncate('', {})).to.be.equal('');
  });

  it('正常', function () {
    expect(truncate('12345', 5)).to.be.equal('12345');
    expect(truncate('123456', 5)).to.be.equal('12...');
    expect(truncate('123456', 5, '..')).to.be.equal('123..');
  });
});
