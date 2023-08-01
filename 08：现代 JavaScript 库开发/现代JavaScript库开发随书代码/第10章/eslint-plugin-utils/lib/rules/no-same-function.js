/**
 * @fileoverview 不能有和utils同名的函数
 * @author jslib-book
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const { isExist } = require('../utils/index');
// 可能会冲突的函数名
const limitList = ['truncate', 'range', 'pick', 'getParam'];

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: '不能有和utils同名的函数',
      category: 'Best Practices',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    function isInLimitList(funcName, node) {
      if (limitList.indexOf(funcName) !== -1) {
        context.report({
          node,
          message: '@jslib-book/utils中已存在此函数',
        });
      }
    }

    function check(node) {
      let funcName;
      if (isExist(node, 'parent', 'id', 'name')) {
        funcName = node.parent.id.name;
        isInLimitList(funcName, node.parent.id);
      }
      if (isExist(node, 'parent', 'key', 'name')) {
        funcName = node.parent.key.name;
        isInLimitList(funcName, node.parent.key);
      }
      if (isExist(node, 'id', 'name')) {
        funcName = node.id.name;
        isInLimitList(funcName, node.id);
      }
    }

    return {
      FunctionDeclaration: check,
      ArrowFunctionExpression: check,
      FunctionExpression: check,
    };
  },
};
