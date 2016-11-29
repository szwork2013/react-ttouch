## Features
* 仅需要 五步 即刻开发出中型应用
* 依赖路由动态注入model(reducer、effects、view) 
* 模型、路由、service 高度分离/复用 便于扩展
* 引入 命名空间 实现按不同模型分发action,避免reducers、effects重名
* 使用 ant-mobile ( 避免再次踩坑)

## 技术栈
* views: [React](https://github.com/facebook/react)
* models: [redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux), [redux-saga](https://github.com/yelouafi/redux-saga)  (比使用thunk处理异步处理更方便)
* router: [react-router](https://github.com/reactjs/react-router)
* dev-tools: [react-hot-loader](https://github.com/gaearon/react-hot-loader)(支持热替换),[ReduxLogger](https://github.com/evgenyrodionov/redux-logger)(打印动作及前后状态变化) ,[DevTools/Chrome插件形式](https://github.com/zalmoxisus/redux-devtools-extension),[eslint](https://github.com/eslint/eslint)(语法检查)
* http: [whatwg-fetch](https://github.com/github/fetch)


## 下载

```shell
git clone https://github.com/scholar-ink/react-ttouch

npm install

npm start
```

### <a name="tree">⊙目录结构</a>
```
.
├─ build/            # Webpack 配置目录
├─ dist/             # build 生成的生产环境下的项目
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ components/      # 展示组件/木偶组件
│   ├─ containers/      # 容器组件
│   ├─ models/          # 容器组件
│   │   ├─ common.js        #处理公共方法(例如:全局加载loading)
│   │   ├─ user.js          # 用户模型
│   ├─ redux/           # Redux 相关处理
│   │   ├─ create.js        # 创建store
│   │   ├─ enhancers.js     # 加强store
│   │   ├─ middleware.js    # 中间件
│   │   ├─ model.js         # 模型相关函数
│   │   ├─ reducer.js       # reducer
│   │   ├─ saga.js          # saga 运行函数
│   ├── routes/         # 路由 (动态注入)
│   ├── services/       # 请求相关的抽离
│   ├── utils/          # 工具库（UTIL）
│   │   ├─ BabelHelper.js   # Babel函数
│   │   ├─ Interceptors.js  # 拦截器(处理权限验证等拦截操作)
│   │   ├─ Request.js       # fetch的封装
│   ├── app.js       # 启动文件
│   ├── index.css    # 公共样式
│   ├── index.html   # 静态基页
├── static/          # 放置无需经由 Webpack 处理的静态文件
├── .babelrc         # Babel 转码配置
├── .eslintignore    #（配置）ESLint 检查中需忽略的文件（夹）
├── .eslintrc        # ESLint 配置
├── .gitignore       #（配置）需被 Git 忽略的文件（夹）
├── package.json     #（这个就不用多解释了吧）
```


##推荐
* 安装 [nrm](http://www.tuicool.com/articles/nYjqeu) (可以切换npm仓库)  


