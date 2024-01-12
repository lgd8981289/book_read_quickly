/**
 * @fileoverview typeof不能用于对象和数组，请使用@jslib-book/type
 * @author jslib-book
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/type-typeof-limit'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const msg = 'typeof不能用于对象和数组，请使用 @jslib-book/type';

const ruleTester = new RuleTester();
ruleTester.run('type-typeof-limit', rule, {
  valid: [{ code: 'typeof a == "number"' }, { code: 'a == "object"' }],

  invalid: [
    {
      code: 'typeof a == "object"',
      errors: [
        {
          message: msg,
        },
      ],
    },
    {
      code: 'typeof a === "object"',
      errors: [
        {
          message: msg,
        },
      ],
    },
  ],
});
