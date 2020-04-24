import React, { Component } from "react";
import HeaderBar from "components/headerbar/HeaderBar.jsx";
import Swipper from "./swipper/Swipper";
import { get } from "utils/http";

export default class CookBook extends Component {
  constructor() {
    super();
    this.state = {
      swipperData: [],
    };
  }
  render() {
    return (
      <div>
        <HeaderBar>菜谱大全</HeaderBar>
        <Swipper datalist={this.state.swipperData}></Swipper>
      </div>
    );
  }

  componentDidMount() {
    // 请求 Carousel 数据
    this.getCarouselData();
  }

  async getCarouselData() {
    let result = await get("/api/swipper");
    this.setState({
      swipperData: result.data.data,
    });
  }
}
