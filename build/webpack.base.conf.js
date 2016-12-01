var path = require('path'),
  webpack = require('webpack'),
  pxtorem = require('postcss-pxtorem'),
  NyanProgressPlugin = require('nyan-progress-webpack-plugin');


var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'), // 开发源码目录
  env = process.env.NODE_ENV.trim(); // 当前环境
var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};

module.exports = {
  commonPath: commonPath,
  entry: {
    app: path.join(src, 'app.js'),
    
    // ================================
    // 框架 / 类库 分离打包
    // ================================
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'history',
      'redux-saga'
    ]
  },
  output: {
    path: path.join(commonPath.dist, 'static'),
    publicPath: '/static/',
  },
  resolve: {
    modulesDirectories: ['node_modules',path.join(rootPath, 'node_modules')],
    extensions: ['', '.web.js', '.js', '.jsx'],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.join(src, 'assets'),
      COMPONENT: path.join(src, 'components'),
      ACTION: path.join(src, 'redux/actions'),
      REDUCER: path.join(src, 'redux/reducers'),
      STORE: path.join(src, 'redux/store'),
      ROUTE: path.join(src, 'routes'),
      SERVICE: path.join(src, 'services'),
      UTIL: path.join(src, 'utils'),
      HOC: path.join(src, 'utils/HoC'),
      MIXIN: path.join(src, 'utils/mixins'),
      VIEW: path.join(src, 'views')
    }
  },
  resolveLoader: {
    root: path.join(rootPath, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: (function() {
          var _loaders = ['babel?' + JSON.stringify({
            cacheDirectory: true,
            plugins: [
              'transform-runtime',
              'transform-decorators-legacy'
            ],
            presets: ['es2015', 'react', 'stage-0'],
            env: {
              production: {
                presets: ['react-optimize']
              }
            }
          }), 'eslint'];
          
          // 开发环境下引入 React Hot Loader
          if (env === 'development') {
            _loaders.unshift('react-hot');
          }
          return _loaders;
        })(),
        include: src,
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10240, // 10KB 以下使用 base64
          name: 'img/[name]-[hash:6].[ext]'
        }
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  postcss: function () {
    return [pxtorem({
      rootValue: 100,
      propWhiteList: [],
      selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/]
    })];
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    new webpack.DefinePlugin({
      'process.env': { // 这是给 React / Redux 打包用的
        NODE_ENV: JSON.stringify('production')
      },
      // ================================
      // 配置开发全局常量
      // ================================
      __DEV__: env === 'development',
      __PROD__: env === 'production',
      __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
    })
  ]
};
