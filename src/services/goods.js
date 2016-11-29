/**
 * Created by zhouchao on 16/11/28.
 */
import { post } from '../utils/Request';

export async function getGoods() {
  
  return post('goods-info/goods-info', {'gid': 39, province_id: 3});
  
}
