/**
 * Created by zhouchao on 16/11/26.
 */
import React from 'react';
import { Link } from 'react-router'
import { ListView } from 'antd-mobile';
import styles from './GoodsList.css'

const GoodsList = ({dataSource, isLoading})=>{
  
  const separator = (sectionID, rowID) => (
    <div key={`${sectionID}-${rowID}`} style={{
      backgroundColor: '#F5F5F9',
      height: 1,
      borderBottom: '1px solid #ECECED',
    }}
    />
  );
  
  const row = (rowData, sectionID, rowID) => {
    
    return (
    <Link to={`/goods/detail/${rowData.goodsId}`}>
      <div key={rowID} >
        <div className={styles.goods}>
          <img src={rowData.img} />
          <div className={styles.goodsRight}>
            <p className={styles.title}>{rowData.title}</p>
            <p className={styles.spec}>{rowData.spec}</p>
            <div>
              <span className={styles.price}>¥<b>{rowData.price}</b></span>
              { rowData.is_expiring == 1 ? <span className={styles.expiring}>临期</span> : ''}
            </div>
            <p className={styles.otherInfo}>
              <span className={styles.origin}>产地: {rowData.origin}</span>
              <span className={styles.stock}>库存: {rowData.stock}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
    );
  };
  return (
    <div className={styles.goodsList}>
      <ListView
        dataSource={dataSource}
        renderSeparator={separator}
        renderFooter={() => <div style={{ padding: 30, textAlign: 'center' }}>
          {isLoading ? '加载中...' : '加载完毕'}
        </div>}
        renderRow={row}
        pageSize={4}
        useBodyScroll = {true}
      />
    </div>
  );
};

export default GoodsList;
