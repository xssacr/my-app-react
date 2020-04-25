import React, { Component } from "react";
import Grid from "components/grid/Grid";
import "../cookbook.scss";
export default class HotShowing extends Component {
  clickHandler = (item) => {
    console.log(item);
  };

  render() {
    return (
      <div className="hotcate">
        <h1>热门分类</h1>
        <Grid
          col={4}
          list={this.props.datalist}
          itemCilck={this.clickHandler}
        ></Grid>
      </div>
    );
  }
}
