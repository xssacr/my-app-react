const defaultState = {
  datalist: [],
  isEnd: false  // 是否是最后一页
}

const reducer = (state = defaultState, action) => {
  let list = state.datalist;
  console.log('action:' ,action)  // _page
  if (action._page === 1) {
    // 说明是第一页
    list = [];
  }
  switch (action.type) {
    case 'ADD_LIST_DATA':
      return {
        datalist: list.concat(action.data),
        isEnd: action.data.length < action._limit ? true : false
      }
    default:
      return state
  }

}

export default reducer;