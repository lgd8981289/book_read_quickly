import { precompile } from '@jtemplate/precompiler';

export default function (tpl) {
  const source = precompile(tpl);

  return 'module.exports = ' + source;
}
