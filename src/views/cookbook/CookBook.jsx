import React, { Component } from "react";
import HeaderBar from "components/headerbar/HeaderBar";
import Search from "components/search/Search";
import Swipper from "./components/Swipper";
import HotCategory from "./components/HotCategory";
import Top10 from "./components/Top10";
import { get } from "utils/http";

export default class CookBook extends Component {
  constructor() {
    super();
    this.state = {
      swipperData: [],
      hotcateData: [],
      cookbooklist: [],
    };
  }
  render() {
    return (
      <div>
        <HeaderBar>菜谱大全</HeaderBar>
        <Swipper datalist={this.state.swipperData}></Swipper>
        <Search
          hasborder={true}
          conbgcolor={"#f5f5f5"}
          inputbgcolor={"#fff"}
          bordercolor={"#b28969"}
          placeholdertext="想吃什么搜什么,如:川菜"
        ></Search>
        <HotCategory datalist={this.state.hotcateData}></HotCategory>
        <Top10 datalist={this.state.cookbooklist}></Top10>
      </div>
    );
  }

  componentDidMount() {
    // 请求 Carousel 数据
    this.getCarouselData();

    // 请求 热门分类的数据
    this.getHotCategoryData();

    // 精品好菜的数据
    this.getCookBookList();
  }

  async getCarouselData() {
    let result = await get("/api/swipper");
    this.setState({
      swipperData: result.data.data,
    });
  }

  async getHotCategoryData() {
    let result = await get("/api/hotcate");
    console.log(result);
    this.setState({
      hotcateData: result.data.list,
    });
  }

  async getCookBookList() {
    let result = await get("/api/cookbooklist");
    this.setState({
      cookbooklist: result.data.data,
    });
  }
}
