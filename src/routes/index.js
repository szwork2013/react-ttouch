import Common from '../containers/Common'
import HomeBar from '../containers/HomeBar'
import {injectModel} from '../redux/model'

export default {
  path: '/',
  /* 布局基页 */
  getComponent (nextState, cb) {
    injectModel(require('../models/common').default);
    cb(null, Common);
  },
  indexRoute: {
    component: HomeBar,
  },
  childRoutes: [
    
    require('./goods').default,
  
    // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
    { path: '*', component: require('../containers/404').default }
  ]
}
