import { get } from 'utils/http';

const loadListData = (params) => {
  return dispatch => {
    // 请求数据
    get('/apilist/hotlist', params ).then(result => {
      dispatch({ type: 'ADD_LIST_DATA', data: result.data, ...params })
    })
  }
}

export {
  loadListData
}