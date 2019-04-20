const path = require('path')
const webpack = require('webpack')

const prod = process.env.NODE_ENV
const buildDev = process.env.BUILD_DEV
const devServer = !prod && !buildDev

module.exports = {
  mode: 'development',

  devtool: prod ? '' : 'eval-source-map',

  devServer: !devServer ? {} : {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },

  entry: {
    game: [path.resolve(__dirname, 'src/main.js')],
    vendor: ['phaser']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    })
  ]
}
