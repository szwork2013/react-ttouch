/**
 * Created by zhouchao on 16/11/26.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

@connect( // 功能同 UTIL/createContainer
  ({ common }) => ({ common })
)
export default class Home extends Component{
 
    constructor(props){
      super(props);
  
      this.props = props;
      
    }
    
    render(){
      
      this.state = this.props.common;
      
      return(
        <div>
         404
        </div>
      );
      
    }
}
