import { connect } from 'react-redux';
import { loadListData } from './actionCreators'

const mapState = (state) => {
  return {
    datalist: state.list.datalist,
    isEnd: state.list.isEnd
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData: (params) => {
      dispatch(loadListData(params))
    }
  }
}


export default connect(mapState, mapDispatch);