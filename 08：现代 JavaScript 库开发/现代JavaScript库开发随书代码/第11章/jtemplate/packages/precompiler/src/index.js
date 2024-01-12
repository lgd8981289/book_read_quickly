import { parse } from '@jtemplate/parser';
import { parseScript, Syntax } from 'esprima';
import { traverse } from 'estraverse';

function getIdentifierName(node) {
  return node && node.name;
}
function getAssignmentPatternName(node) {
  if (node.left.type === Syntax.Identifier) {
    return [getIdentifierName(node.left)];
  }
  if (node.left.type === Syntax.ArrayPattern) {
    return getArrayPatternName(node.left);
  }
  if (node.left.type === Syntax.ObjectPattern) {
    return getObjectPatternName(node.left);
  }
}
function getRestElementName(node) {
  if (node.argument.type === Syntax.Identifier) {
    return [getIdentifierName(node.argument)];
  }
  if (node.argument.type === Syntax.ArrayPattern) {
    return getArrayPatternName(node.argument);
  }
  if (node.argument.type === Syntax.ObjectPattern) {
    return getObjectPatternName(node.argument);
  }
}
function getArrayPatternName(node) {
  return node.elements.reduce((prev, element) => {
    if (element.type === Syntax.Identifier) {
      return prev.concat(getIdentifierName(element));
    }
    if (element.type === Syntax.AssignmentPattern) {
      return prev.concat(getAssignmentPatternName(element));
    }
    if (element.type === Syntax.ArrayPattern) {
      return prev.concat(getArrayPatternName(element));
    }
    if (element.type === Syntax.ObjectPattern) {
      return prev.concat(getObjectPatternName(element));
    }
    if (element.type === Syntax.RestElement) {
      return prev.concat(getRestElementName(element));
    }
  }, []);
}
function getObjectPatternName(node) {
  return node.properties.reduce((prev, property) => {
    const value = property.value;
    if (value.type === Syntax.Identifier) {
      return prev.concat(getIdentifierName(value));
    }
    if (value.type === Syntax.AssignmentPattern) {
      return prev.concat(getAssignmentPatternName(value));
    }
    if (value.type === Syntax.ArrayPattern) {
      return prev.concat(getArrayPatternName(value));
    }
    if (value.type === Syntax.ObjectPattern) {
      return prev.concat(getObjectPatternName(value));
    }
  }, []);
}
function getVariableDeclaratorName(node) {
  const id = node.id;

  if (id.type === Syntax.Identifier) {
    return [getIdentifierName(id)];
  }
  if (id.type === Syntax.ArrayPattern) {
    return getArrayPatternName(id);
  }
  if (id.type === Syntax.ObjectPattern) {
    return getObjectPatternName(id);
  }
  /* istanbul ignore next */
  return [];
}
function getParamsName(params) {
  return params.reduce((prev, param) => {
    if (param.type === Syntax.Identifier) {
      return prev.concat(getIdentifierName(param));
    }
    if (param.type === Syntax.AssignmentPattern) {
      return prev.concat(getAssignmentPatternName(param));
    }
    if (param.type === Syntax.ArrayPattern) {
      return prev.concat(getArrayPatternName(param));
    }
    if (param.type === Syntax.ObjectPattern) {
      return prev.concat(getObjectPatternName(param));
    }
    if (param.type === Syntax.RestElement) {
      return prev.concat(getRestElementName(param));
    }
  }, []);
}
function inContextStack(cs, name) {
  let i = cs.length;
  while (i--) {
    if (cs[i].varList.indexOf(name) !== -1) {
      return true;
    }
  }

  return false;
}
function hasContext(type) {
  return (
    [
      Syntax.ArrowFunctionExpression,
      Syntax.FunctionDeclaration,
      Syntax.FunctionExpression,
      Syntax.ForStatement,
      Syntax.ForInStatement,
      Syntax.ForOfStatement,
      Syntax.BlockStatement,
    ].indexOf(type) !== -1
  );
}

export function detectVar(code) {
  const ast = parseScript(code);

  // hasContext()
  // { type: '', varList: [] }
  const contextStack = [
    {
      type: 'template',
      varList: ['__code__'],
    },
    {
      type: 'root',
      varList: [],
    },
  ];

  let unVarList = [];

  traverse(ast, {
    enter(node, parent) {
      const type = node.type;
      let currentContext = contextStack[contextStack.length - 1];
      if (hasContext(type)) {
        currentContext = {
          type: type,
          varList: [],
        };
        contextStack.push(currentContext);

        if (
          [
            Syntax.ArrowFunctionExpression,
            Syntax.FunctionDeclaration,
            Syntax.FunctionExpression,
          ].indexOf(type) !== -1
        ) {
          // 放入函数名字
          if (node.id) {
            currentContext.varList.push(getIdentifierName(node.id));
          }
          currentContext.varList = currentContext.varList.concat(
            getParamsName(node.params)
          );
        }
      } else if (type === Syntax.VariableDeclarator) {
        currentContext.varList = currentContext.varList.concat(
          getVariableDeclaratorName(node)
        );
      } else if (type === Syntax.Identifier) {
        // todo check 是否在 context stack
        if (inContextStack(contextStack, node.name)) {
          return;
        }
        // a.b b return
        if (parent.type === Syntax.MemberExpression && parent.object !== node) {
          return;
        }

        const name = getIdentifierName(node);
        if (unVarList.indexOf(name) === -1) {
          unVarList.push(name);
        }
      }
    },
    leave(node) {
      if (hasContext(node.type)) {
        contextStack.pop();
      }
    },
  });

  return unVarList;
}

export function generateVarCode(nameList) {
  return nameList
    .map(
      (name) =>
        `    var ${name} = __hasOwnProp__.call(__data__, '${name}') ? __data__['${name}']  : undefined;`
    )
    .join('\n');
}

export function precompile(tpl) {
  const code = parse(tpl);

  const unVarList = detectVar(code);

  const source = `
function render(__data__) {
    var __hasOwnProp__ = ({}).hasOwnProperty;

    ${generateVarCode(unVarList)}
    
    try {
        var __code__ = '';

        ${code}

        return __code__;
    } catch(e) {
        console.log(e);
        return 'error';
    }
}`;

  return source;
}
