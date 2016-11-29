import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import middleware from './middleware'
import enhancers from './enhancers'
import { createReducer } from './reducer'

// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  createReducer(),
  window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
  compose(
    applyMiddleware(...middleware), // 引入中间件
    ...enhancers // 引入加强store
  )
);

store.models = [];

export default store;

// ======================================================
// 增强版 history
// ======================================================
export const history = syncHistoryWithStore(
  browserHistory,
  store,
);
