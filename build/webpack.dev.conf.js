var webpack = require('webpack'),
  config = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  // SOURCE_MAP = true; // 大多数情况下用不到
  SOURCE_MAP = false;

config.output.filename = '[name].js';
config.output.chunkFilename = '[name].js';

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output.publicPath = '/';

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.loaders.push(
{
  test: /\.css$/,
  include:/node_modules/,
  loader:  ExtractTextPlugin.extract("css?sourceMap&-restructuring&-autoprefixer!postcss-loader")
},
{
  test: /\.css$/,
  exclude:/node_modules/,
  loader:  ExtractTextPlugin.extract("css?sourceMap&-restructuring&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!postcss-loader")
}, {
  test: /\.less$/,
  loader: 'style!css!less'
}, {
  test: /\.scss$/,
  loader: 'style!css!sass'
}
);
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].[contenthash:6].css', {
    allChunks : true // 若要按需加载 CSS 则请注释掉该行
  }),
  // new ExtractTextPlugin("styles.css"),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: config.commonPath.indexHTML,
    inject: 'body',
    chunksSortMode: 'none'
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090,
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
);

module.exports = config;
