var babel = require('rollup-plugin-babel');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version}
 * Licensed under MIT
 */
`;

function getCompiler(opt) {
    return babel({
        babelrc: false,
        presets: [
            [
                '@babel/preset-env',
                {
                    'targets': {
                        'browsers': 'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
                        'node': '0.12'
                    },
                    'modules': false,
                    'loose': false
                }
            ]
        ],
        plugins: [
            [
                '@babel/plugin-transform-runtime',
                {
                    "corejs": 2,
                    'helpers': false,
                    'regenerator': false
                }
            ]
        ],
        runtimeHelpers: true,
        exclude: 'node_modules/**'
    });
}

exports.name = 'clone';
exports.banner = banner;
exports.getCompiler = getCompiler;
