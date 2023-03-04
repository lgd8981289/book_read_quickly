const path = require('path');
const fs = require('fs');
const { travel } = require('./util/util.js');
const ts = require('typescript');

const traverseNode = (node) => {
  let res = [];
  if (ts.isImportDeclaration(node)) {
    const library = node.moduleSpecifier.text;

    if (library === '@jslib-book/utils') {
      const names = node.importClause?.namedBindings.elements.map(
        (item) => item.name.escapedText
      );

      res.push({
        library,
        names,
      });
    }
  }

  ts.forEachChild(node, (node) => {
    res = res.concat(traverseNode(node));
  });

  return res;
};

const findImport = (pathname) => {
  const sourcefile = ts.createSourceFile(
    pathname,
    fs.readFileSync(pathname, { encoding: 'utf-8' }),
    ts.ScriptTarget.ES2022
  );

  const imports = traverseNode(sourcefile);

  return { pathname, imports };
};

function analyse(argv) {
  const cmdPath = process.cwd();
  const rootPath = argv._[1] ? path.resolve(argv._[1]) : cmdPath;

  const { output } = argv;

  console.log('start analyze ...');

  const res = [];

  travel(
    rootPath,
    (pathname) => {
      const type = path.extname(pathname);

      if (!['.ts', '.tsx', '.js', '.jsx'].includes(type)) {
        return;
      }
      console.log('scan:', pathname);
      res.push(findImport(pathname));
    },
    []
  );

  const funcMap = res.reduce((prev, item) => {
    for (const imt of item.imports) {
      for (const name of imt.names) {
        const fns = (prev[name] = prev[name] ? prev[name] : []);
        fns.push(item.pathname);
      }
    }
    return prev;
  }, {});

  console.log(`包引用次数: ${res.length}`);
  console.log(`函数总引用: ${Object.values(funcMap).flat(3).length}`);

  for (const [name, files] of Object.entries(funcMap)) {
    console.log(`${name}: ${files.length}`);
  }

  if (output) {
    fs.writeFileSync(path.resolve(cmdPath, 'output.json'), JSON.stringify(res));
    fs.writeFileSync(
      path.resolve(cmdPath, 'output-fn.json'),
      JSON.stringify(funcMap)
    );
  }
}

module.exports.analyse = analyse;
