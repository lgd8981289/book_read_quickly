/**
 * @fileoverview eslint plugin for utils
 * @author jslib-book
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + '/rules'),
  configs: {
    plugins: ['@jslib-book/utils'],
    rules: {
      '@jslib-book/utils/type-typeof-limit': 'error',
      '@jslib-book/utils/type-instanceof-limit': 'error',
      '@jslib-book/utils/no-same-function': 'error',
    },
  },
};
