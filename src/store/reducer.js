// 整合多个 reducer

import { combineReducers } from 'redux'
import index from '../views/index/redux/reducer'  // 首页模块的 reducer
import list from '../views/list/redux/reducer'  // 列表模块的 reducer

const reducer = combineReducers({
  index,
  list
})

export default reducer;