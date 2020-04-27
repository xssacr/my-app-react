import React, { Component } from "react";
import Grid from "components/grid/Grid";
import "../cookbook.scss";
import { withRouter } from "react-router-dom";

class HotShowing extends Component {
  clickHandler = (item) => {
    // 视图跳转
    this.props.history.push('/list');
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

export default withRouter(HotShowing);
