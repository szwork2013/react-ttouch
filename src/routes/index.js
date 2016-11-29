import { injectModel } from '../redux/model'
import HomeBar from '../containers/HomeBar'

export default {
  path: '/',
  /* 布局基页 */
  getComponent (nextState, cb) {
    injectModel(require('../models/common').default);
    cb(null, require('../containers/Common').default);
  },
  indexRoute: {
    component: HomeBar,
  },
  childRoutes: [
  
    require('./goods').default,

  ]
}
