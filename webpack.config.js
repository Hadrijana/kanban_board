const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './public/src/script.ts',
    signin: './public/src/signin.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban board',
      template: './public/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'kanban.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Login page',
      template: './public/signin.html',
      inject: true,
      chunks: ['signin'],
      filename: 'signin.html',
    }),
  ],
  devServer: {
    port: 8000,
  },
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
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'client'),
    clean: true,
  },
}
