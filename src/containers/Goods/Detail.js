/**
 * Created by zhouchao on 16/11/26.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './Detail.css'

@connect( // 功能同 UTIL/createContainer
  ({ goods }) => ({ goods })
)
export default class GoodsDetail extends Component{
  
  constructor(props){
    
    super(props);
    
    props.dispatch({type: 'goods/query'});
  
  }
  render(){
  
    return (
      
      <div className={styles.title222}>
  
        <Link to={'/'}>
  dsadsa333
        </Link>
          
      </div>
    );
    
  }
  
}
