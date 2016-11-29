import React, {Component} from 'react'
/**
 * 本组件为欢迎页（首页）
 * 由于几乎没有交互逻辑
 * 因此可以不使用类的写法
 * 
 * 实际上，ES6 的类经由 Babel 转码后
 * 其实还是返回一个类似的函数
 */

export default class Cart extends Component{
  
  constructor(props){
    
    super(props);
    
    console.info(1);
    
  }
  render(){
    return(
      <div className="category">
        <h1>购物车</h1>
      </div>
    );
  }
}

