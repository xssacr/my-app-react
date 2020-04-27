import React from 'react';

// 结构出来两个方法
const {
  Provider,
  Consumer: MapConsumer
} = React.createContext();

// 把Provider 设置成组件
class MapProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowMap: JSON.parse(localStorage.getItem("isShowMap")) || false,
    }
  }
  render() {
    return (
      <Provider value={{
        isShowMap: this.state.isShowMap,
        changeStates: this.changeStates
      }}>
        {this.props.children}
      </Provider>
    )
  }

  // 改变状态
  changeStates = () => {
    this.setState((preState) => {
      return {
        isShowMap: !preState.isShowMap
      }
    }, () => {
      localStorage.setItem('isShowMap', this.state.isShowMap)
    })
  }
}




export {
  MapConsumer,
  MapProvider
}