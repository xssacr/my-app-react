import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import {
  ListContainer,
  ListItemsContainer,
  ItemContainer,
  TextBlockEllipsis,
} from "./List.style";
import { ListView, Toast } from "antd-mobile";
import connect from "./redux/connect";

class List extends Component {
  constructor() {
    super();

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });


    this.page = 1; // 第几页
    this.limit = 10; // 每页展示10条数据
    this.state = {
      dataSource,
      keyword: "",
    };
  }
  leftClick = () => {
    this.props.history.go(-1);
  };

  // 和 state 中的 keyword 做一个双向绑定
  changeHandler = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  // 滑动到底部的方法
  onEndReached = () => {
    // 判断是不是最后一页
    if (this.props.isEnd) {
      // 提示
      Toast.info("没有更多数据了", 1);
      return;
    }
    // 重新发请求
    this.props.loadData({
      _page: ++this.page,
      _limit: this.limit,
      q: this.state.keyword,
    });
  };

  // 点击搜索时,也需要重新发送请求
  searchHandler = () => {
    this.page = 1;
    this.props.loadData({
      _page: this.page,
      _limit: this.limit,
      q: this.state.keyword,
    });
  };

  render() {

    // 列表中每一行的组件
    const row = (rowData, sectionID, rowID) => {
      return (
        <ItemContainer>
          <div>
            <img src={rowData.img} alt="" />
          </div>
          <div>
            <h3>{rowData.name}</h3>
            <TextBlockEllipsis>{rowData.burdens}</TextBlockEllipsis>
            <p>
              {rowData.all_click} 浏览 {rowData.favorites}收藏
            </p>
          </div>
        </ItemContainer>
      );
    };

    return (
      <ListContainer>
        <NavBar
          icon={<Icon type="left" />}
          rightContent={
            <Icon key="0" type="search" onClick={this.searchHandler} />
          }
          onLeftClick={this.leftClick}
        >
          <input
            type="text"
            placeholder="红烧鱼"
            onChange={this.changeHandler}
          />
        </NavBar>

        <ListItemsContainer>
          <ul>
            {
              // 组件放到这里
              <ListView
                ref={(el) => (this.lv = el)}
                dataSource={this.state.dataSource.cloneWithRows(
                  this.props.datalist
                )}
                renderRow={row}
                useBodyScroll
                onScroll={() => {
                  console.log("scroll");
                }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
              />
            }
          </ul>
        </ListItemsContainer>
      </ListContainer>
    );
  }

  componentDidMount() {
    this.props.loadData({
      _page: this.page,
      _limit: this.limit,
      q: this.state.keyword,
    });
  }
}

export default connect(List);
