import { connect } from 'react-redux'
import {loadListData} from '../../../list/redux/actionCreators'

const mapState = (state) => {
  return {
    swipperList: state.list.datalist
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData: (params) => {
      dispatch(loadListData(params))
    }
  }
}

export default connect(mapState,mapDispatch)