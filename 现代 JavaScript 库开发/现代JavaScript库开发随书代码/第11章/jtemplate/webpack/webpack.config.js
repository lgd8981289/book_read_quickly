module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tmpl/,
        use: [
          {
            loader: 'jtemplate-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
