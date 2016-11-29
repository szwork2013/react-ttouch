import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Carousel, Grid, Flex, ListView } from 'antd-mobile';
import GoodsList from '../../components/Goods/GoodsList'
import styles from './index.css'

/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */
@connect(
  ({ user }) => ({ user })
)
export default class Home extends Component{
    
    constructor(props){
      super(props);
      
      this.state = {
        dataSource: [],
        isLoading: false
      };
      
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });
  
      const listData = [
        {
          goodsId: 1,
          img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
          title: '福临门 原装进口 柬埔寨吴哥情香米 中粮出品 大米 5kg',
          spec: '规格：5kg/袋',
          price: '29.00',
          is_expiring: 1,
          origin: '荷兰',
          stock: '99'
        },
        {
          goodsId: 2,
          img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
          title: '德国进口（Eichbaum） 爱士堡小麦黑啤 500ml*24 听',
          spec: '规格：24听/箱',
          price: '69.00',
          is_expiring: 2,
          origin: '荷兰',
          stock: '99'
        },
        {
          goodsId: 3,
          img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
          title: '肉干肉脯 鸭舌五香味 100g/袋 零食',
          spec: '规格：100g/袋',
          price: '29.00',
          is_expiring: 1,
          origin: '荷兰',
          stock: '99'
      
        },
      ];
      
      this.state.dataSource = dataSource.cloneWithRows(listData);
    }
    
    render(){
      
      
      const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
      };
      
      const data = [
        {
          icon: require('./home_jiushui.png'),
          text: '酒水饮料'
        },
        {
          icon: require('./home_niunai.png'),
          text: '牛奶乳品'
        },
        {
          icon: require('./home_linshi.png'),
          text: '休闲零食'
        },
        {
          icon: require('./home_liangshi.png'),
          text: '粮油副食'
        }
      ];
      return (
        <div>
          <div className={styles.pagination} >
              <Carousel {...settings}>
                <img src="http://app.ttouch.com.cn/yishipi/storage/web/source/1/EIvISAyQ1l6fxhuiAomUkujomdGmJKER.jpg" />
                <img src="http://app.ttouch.com.cn/yishipi/storage/web/source/1/EIvISAyQ1l6fxhuiAomUkujomdGmJKER.jpg" />
              </Carousel>
          </div>
          <div className={styles.grayText}>
            <span className={styles.grayLayout}>进口特价批</span>
          </div>
          <Grid data={data} columnNum={4} hasLine={false}
                renderItem={(dataItem, index) => (
                  <div style={{textAlign: 'center' }}>
                    <img src={dataItem.icon} style={{ width: '50%', margin: '24px', borderRadius: '50%'}} />
                    <div>
                      <span style={{ fontSize: '0.3rem', color: '#4a4a4a'}}>{dataItem.text}</span>
                    </div>
                  </div>
                )}
          />
          <div className={styles.grayText}>
            <span className={styles.grayLayout}>国产特价批</span>
          </div>
          <Grid data={data} columnNum={4} hasLine={false}
                renderItem={(dataItem, index) => (
                  <div style={{textAlign: 'center' }}>
                    <img src={dataItem.icon} style={{ width: '50%', margin: '24px', borderRadius: '50%'}} />
                    <div>
                      <span style={{ fontSize: '0.3rem', color: '#4a4a4a'}}>{dataItem.text}</span>
                    </div>
                  </div>
                )}
          />
          <div className={styles.ads}>
            <Flex>
              <Flex.Item>
                <div className={styles.ads1_head}>
                  <img src={require('./home_jktp.png')} />
                  <span>进口临期特批</span>
                </div>
                <div className={styles.ads1}>
                  <img src={require('./1.png')} />
                </div>
              </Flex.Item>
              <Flex.Item>
                <Flex direction="column">
                  <Flex.Item>
                    <div className={styles.ads2_top}>
                      <div className={styles.ads2_top_right + ' ' + styles.ads1_head}>
                        <img src={require('./home_jktp.png')} />
                        <span>国产临期特批</span>
                      </div>
                      <div className={styles.ads2_top_right}>
                        <img style={{width: '200px'}} src={require('./1.png')} />
                      </div>
                    </div>
                  </Flex.Item>
                  <Flex.Item>22211</Flex.Item>
                </Flex>
              </Flex.Item>
            </Flex>
          </div>
          <GoodsList dataSource={this.state.dataSource} isLoading={this.state.isLoading} />
        </div>
      );
    }
}
