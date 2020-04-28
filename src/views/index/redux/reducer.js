// 主要负责首页模块的 数据修改
const defaultState = {
  isShowMap: true
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_map_show_state':
      // 改变地图的状态
      return {
        isShowMap: !state.isShowMap
      }
    default:
      return state
  }
}

export default reducer;