var expect = require("expect.js");
var type = require("../src/index.js").type;

describe('c', function() {
    this.timeout(1000);
    it('单元测试', function() {
        expect(type(undefined), 'undefined');
        expect(type(null), 'null');
        expect(type(true), 'boolean');
        expect(type(1), 'number');
        expect(type(''), 'string');
        expect(type(Symbol()), 'symbol');
    });
})
