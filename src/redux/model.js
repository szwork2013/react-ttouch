/**
 * Created by zhouchao on 16/11/27.
 */
import {_interopRequireDefault} from '../utils/BabelHelper'
import {injectReducer} from './reducer';
import { takeEvery } from 'redux-saga';
import * as sagaEffects from 'redux-saga/effects';
import {injectSaga} from './saga';
import store from '../redux/create';

function checkModel(model) { // 验证model
  
  var _extends2 = require('babel-runtime/helpers/_extends');
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  model = (0, _extends3.default)({}, model); // Clone model to avoid prefixing namespace multiple times
  
  function applyNamespace(type) {  // 添加命名空间(解决不同model下 reduces或者effects  相同执行两边)
    
    if (model[type]) {
      
      let reducers = model[type];
      
      model[type] = Object.keys(reducers).reduce(function (reduce, key) {
        
        reduce['' + model.namespace + '/' + key] = reducers[key];  // eg: dispatch(type: "common/showLoading")
        
        return reduce;
        
      }, {});
      
    }
  }
  applyNamespace('reducers');
  applyNamespace('effects');
  
  return model;
}

export function getReducer(model) { // 生成reducer
  
  return function Reducer(state = model.state, action = {}) { // 返回一个 reducer
    
    const reducer = model.reducers[action.type];
    
    return reducer ? reducer(state, action) : state;
  };
}

function getSaga(effects) {
  
  return function * () {
  
    for (let key in effects) {
      
      const watcher = getWatcher(key, effects[key]);
      
      yield sagaEffects.fork(watcher);
      
    }
  }
}

function getSagas(model) {
  
  let sagas = [];
  
  let effects = model.effects;
  
  if(effects) sagas.push(getSaga(effects));
  
  return sagas;
}

function getWatcher(key, _effect) {
  
  return function * () {
    
    yield takeEvery(key, _effect);
    
  };
  
}

/**
 * 按需加载时，立即注入对应的 model
 * @param  {Object} model
 */
export function injectModel(model) {
  
  if(!store.models[model.namespace]){
  
    model = checkModel(model);// 检查model
  
    injectSaga(getSagas(model));
  
    injectReducer(model.namespace, getReducer(model));
    
    store.models[model.namespace] = model;
    
  }
  
 
}
