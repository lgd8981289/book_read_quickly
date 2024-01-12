var expect = require('expect.js');
var { range } = require('../src/index.js');

describe('测试功能', function () {
  it('error', function () {
    expect(range()).to.eql([]);
  });

  it('-2-2', function () {
    expect(range(-2, 2)).to.eql([-2, -1, 0, 1]);
    expect(range(2, -2)).to.eql([2, 1, 0, -1]);
  });

  it('1-10', function () {
    expect(range(1, 5)).to.eql([1, 2, 3, 4]);
    expect(range(5, 1)).to.eql([5, 4, 3, 2]);
  });

  it('1', function () {
    expect(range(2)).to.eql([2, 1]);
    expect(range(-2)).to.eql([-2, -1]);
  });

  it('step', function () {
    expect(range(1, 3, 1)).to.eql([1, 2]);
    expect(range(3, 1, -1)).to.eql([3, 2]);
    expect(range(1, 10, 2)).to.eql([1, 3, 5, 7, 9]);
  });
});
