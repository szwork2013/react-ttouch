import store, { history } from '../redux/create'
/**
 * 一系列 拦截器
 */

/**
 * 用户访问权限拦截器
 * @param nextState
 * @param replace
 * @param next
 * @returns {*}
 */
export function userAuth(nextState, replace, next) {
  
  let { userData } = store.getState();
  
  if (userData) return next();
  
  console.error('请先登录后再访问');
  
  history.goBack();
  
  // next(replace('/loginPage')) # 举例：跳转到登录页的写法
}

