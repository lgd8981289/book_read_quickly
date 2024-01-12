var expect = require('expect.js');
var { pick } = require('../src/index.js');

describe('测试功能', function () {
  it('异常流程', function () {
    expect(pick()).to.eql({});
    expect(pick(123)).to.eql({});
    expect(pick({})).to.eql({});
    expect(pick({}, 123)).to.eql({});
  });
  it('正常流程', function () {
    expect(pick({ a: 1 }, [])).to.eql({});
    expect(pick({ a: 1, b: 2, c: 3 }, ['a'])).to.eql({ a: 1 });
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd'])).to.eql({ a: 1, c: 3 });
  });
});
