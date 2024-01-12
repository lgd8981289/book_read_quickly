/**
 * @fileoverview instanceof操作符可能存在问题,请使用@jslib-book/type
 * @author jslib-book
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/type-instanceof-limit'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = 'instanceof操作符可能存在问题,请使用@jslib-book/type';

const parserOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('type-instanceof-limit', rule, {
  valid: [{ code: 'const a = typeof "String"' }],

  invalid: [
    {
      code: 'const b = "test2" instanceof "String"',
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});
