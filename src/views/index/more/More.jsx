import React, { Component } from "react";
import { Switch } from "antd-mobile";
import { MapConsumer } from "context/MapContext";

export default class More extends Component {

  render() {
    return (
      <MapConsumer>
        {({ isShowMap, changeStates }) => {
          return (
            <>
              是否展示地图:
              <Switch checked={isShowMap} onChange={changeStates}></Switch>
            </>
          );
        }}
      </MapConsumer>
    );
  }
}
