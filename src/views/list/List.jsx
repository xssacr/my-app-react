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

  changeHandler = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  onEndReached = () => {
    if (this.props.isEnd) {
      // 提示
      Toast.info("没有更多数据了", 1);
      return;
    }
    this.props.loadData({
      _page: ++this.page,
      _limit: this.limit,
      q: this.state.keyword,
    });
  };

  searchHandler = () => {
    this.page = 1;
    this.props.loadData({
      _page: this.page,
      _limit: this.limit,
      q: this.state.keyword,
    });
  }

  render() {
    const row = (row, sectionID, rowID) => {
      return (
        <ItemContainer>
          <div>
            <img src={row.img} alt="" />
          </div>
          <div>
            <h3>{row.name}</h3>
            <TextBlockEllipsis>{row.burdens}</TextBlockEllipsis>
            <p>
              {" "}
              {row.all_click} 浏览 {row.favorites}收藏
            </p>
          </div>
        </ItemContainer>
      );
    };

    return (
      <ListContainer>
        <NavBar
          icon={<Icon type="left" />}
          rightContent={<Icon key="0" type="search" onClick={this.searchHandler}/>}
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
