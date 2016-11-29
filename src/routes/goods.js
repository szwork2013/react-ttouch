/**
 * Created by zhouchao on 16/11/26.
 */
import { injectModel } from '../redux/model'

export default {
  path: 'goods',
  childRoutes: [
    {
      path: 'detail/:goodId',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
  
          injectModel(require('../models/goods').default);
          cb(null, require('../containers/Goods/Detail').default);
          
        }, 'goodsDetail')
      },
    }
  ]
};
