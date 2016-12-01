/**
 * Created by zhouchao on 16/11/26.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import autoBind from 'autobind-decorator'
import pureRender from 'pure-render-decorator';
// import { push } from 'react-router-redux'
import styles from './Detail.css'

@connect(
  ({ goods }) => ({ goods })
)
@pureRender
export default class GoodsDetail extends Component{
  
  constructor(props){
    
    super(props);
    
  }
  
  @autoBind
  click(){
    
    // this.props.dispatch(push(''));
    
    this.props.dispatch({type: 'common/hideLoading'});
    
  }
  
  render(){
  
    return (
      <div className={styles.title}>
  
        <div onClick={this.click}>{this.props.goods.name}</div>

        <div>
          </div>
        
      </div>
    );
    
  }
  
}
