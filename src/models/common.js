export default {
  namespace: 'common',
  state: {
    animating: false,
    animatingText: '正在加载'
  },
  reducers: {
    showLoading(state, action){
      return {...state, animating: true};
    },
    hideLoading(state, action){
      return {...state, animating: false};
    }
  }
};

