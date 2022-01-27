const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './public/src/script.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban board',
      template: './public/index.html',
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Login page',
    //   template: './public/index.html',
    // }),
  ],

  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'public', 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'client'),
    clean: true,
  },
}
