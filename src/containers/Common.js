/**
 * Created by zhouchao on 16/11/26.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'antd-mobile';

@connect( // 功能同 UTIL/createContainer
  ({ common }) => ({ common })
)
export default class Home extends Component{
 
    constructor(props){
      super(props);
    }
    
    render(){
      this.state = this.props.common;
      return(
        <div>
          <div className="container">
            {this.props.children}
          </div>
          <ActivityIndicator
            toast
            text={this.state.animatingText}
            animating={this.state.animating}
          />
        </div>
      );
      
    }
}
