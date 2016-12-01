import { put, call } from 'redux-saga/effects'
import { getGoods } from '../services/goods'
export default {
  namespace: 'goods',
  
  state: {
    gid: '',
    name: '商品1',
    list: [],
    dasdas: '',
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
    
    showLoading(state, {goods}){
      
      return {...state, name: goods};
      
    },
    hideLoading(state, {goods}){
      
      return {...state};
      
    }
  }
};


