import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Home from '../Home';
import Category from '../Category';
import Find from '../Find';
import Cart from '../Cart';
import User from '../User';

export default class HomeBar extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'tab1',
      hidden: false
    };
  }
  render(){
  
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#fa632d"
        barTintColor="white"
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={require('./menu_home_def.png')}
          selectedIcon={require('./menu_home_sel.png')}
          selected={this.state.selectedTab === 'tab1'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab1',
            });
          }}
        >
          <Home/>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./menu_leimu_def.png')}
          selectedIcon={require('./menu_leimu_sel.png')}
          title="分类"
          key="分类"
          selected={this.state.selectedTab === 'tab2'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab2',
            });
          }}
        >
          <Category/>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./menu_faxian_def.png')}
          selectedIcon={require('./menu_faxian_sel.png')}
          title="发现"
          key="发现"
          selected={this.state.selectedTab === 'tab3'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab3',
            });
          }}
        >
          <Cart/>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./menu_gouwuche_def.png')}
          selectedIcon={require('./menu_gouwuche_sel.png')}
          title="购物车"
          key="购物车"
          selected={this.state.selectedTab === 'tab4'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab4',
            });
          }}
        >
          <Find/>
        </TabBar.Item>
        <TabBar.Item
          icon={require('./menu_me_def.png')}
          selectedIcon={require('./menu_me_sel.png')}
          title="个人中心"
          key="个人中心"
          selected={this.state.selectedTab === 'tab5'}
          onPress={() => {
            this.setState({
              selectedTab: 'tab5',
            });
          }}
        >
          <User/>
        </TabBar.Item>
      </TabBar>
    );
    
  }
  
}

