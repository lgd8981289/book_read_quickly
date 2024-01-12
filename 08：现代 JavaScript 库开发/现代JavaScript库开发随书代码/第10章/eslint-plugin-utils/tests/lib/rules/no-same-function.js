/**
 * @fileoverview 不能有和utils同名的函数
 * @author jslib-book
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-same-function'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = '@jslib-book/utils中已存在此函数';

const ruleTester = new RuleTester();
ruleTester.run('no-same-function', rule, {
  valid: [{ code: 'function aaa() {}' }],

  invalid: [
    {
      code: 'function truncate() {}',
      errors: [
        {
          message: msg,
        },
      ],
    },
    {
      code: 'function range() {}',
      errors: [
        {
          message: msg,
        },
      ],
    },
    {
      code: 'function pick() {}',
      errors: [
        {
          message: msg,
        },
      ],
    },
    {
      code: 'function getParam() {}',
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});
