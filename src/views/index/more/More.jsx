import React, { Component } from "react";
import { Switch } from "antd-mobile";
import connect from "../redux/connect";

class More extends Component {
  render() {
    let { isShowMap, changeMapStatus } = this.props;
    return (
      <>
        是否展示地图:
        <Switch checked={isShowMap} onChange={changeMapStatus}></Switch>
      </>
    );
  }

  componentDidMount() {
    console.log(this.props);
  }
}

export default connect(More);
