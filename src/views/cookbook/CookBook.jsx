import React, { Component } from "react";
import HeaderBar from "components/headerbar/HeaderBar";
import Search from 'components/search/Search'
import Swipper from "./components/Swipper";
import HotCategory from './components/HotCategory'
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
        <Search hasborder={true} conbgcolor={'#f5f5f5'} inputbgcolor={'#fff'} bordercolor={'#b28969'} placeholdertext="想吃什么搜什么,如:川菜"></Search>
        <HotCategory></HotCategory>
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
