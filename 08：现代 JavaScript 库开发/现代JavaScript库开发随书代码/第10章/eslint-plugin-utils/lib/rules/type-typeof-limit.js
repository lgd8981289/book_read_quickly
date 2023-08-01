/**
 * @fileoverview typeof不能用于对象和数组，请使用 @jslib-book/type
 * @author jslib-book
 */
'use strict';

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'typeof不能用于对象和数组，请使用 @jslib-book/type',
      category: 'Best Practices',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      BinaryExpression: (node) => {
        const operator = node.operator;
        const left = node.left;
        const right = node.right;

        if (
          (operator === '==' || operator === '===') &&
          left.type === 'UnaryExpression' &&
          left.operator === 'typeof' &&
          right.type === 'Literal' &&
          right.value === 'object'
        ) {
          context.report({
            node,
            message: 'typeof不能用于对象和数组，请使用 @jslib-book/type',
          });
        }
      },
    };
  },
};
