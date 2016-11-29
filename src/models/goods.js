import { put, call } from 'redux-saga/effects'
import { getGoods } from '../services/goods'

export default {
  namespace: 'goods',
  
  state: {
    username: ''
  },
  effects: {
    * query(action){
      
      
      yield put({type: 'common/showLoading'});
      
      const {data} = yield call(getGoods, {});
      
      console.log(data);
  
      yield put({type: 'common/hideLoading'});
  
  
    }
  },
  reducers: {
    
    showLoading(state, action){
      
      return state;
      
    }
  }
};


