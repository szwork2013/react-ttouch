import {sagaMiddleware} from './middleware'

/**
 * 按需加载时，立即运行对应的 Saga
 * @param sagas
 */
export function injectSaga(sagas) {
  
  sagas.forEach(sagaMiddleware.run);
  
}
