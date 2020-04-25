import React, { Component } from "react";
import Grid from "components/grid/Grid";
import "../cookbook.css";
export default class HotShowing extends Component {
  render() {
    return (
      <div className="hotcate">
        <h1>热门分类</h1>
        <Grid col={4}></Grid>
      </div>
    );
  }
}
