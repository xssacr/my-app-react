import { connect } from 'react-redux';

const mapState = (state) => {
  return {
    isShowMap: state.index.isShowMap
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeMapStatus: () => {
      console.log('111')
      dispatch({ type: 'change_map_show_state' });
    }
  }
}

export default connect(mapState,mapDispatch)