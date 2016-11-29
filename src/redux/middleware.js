// ======================================================
// 配置中间件
// ======================================================
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createSagaMiddleware from 'redux-saga'


const historyMiddleware = routerMiddleware(browserHistory);

export const sagaMiddleware = createSagaMiddleware();

const middleware = [historyMiddleware, sagaMiddleware];

if (__DEV__) {
  
  middleware.push(createLogger())
  
}

export default middleware
