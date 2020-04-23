import React, { Component } from "react";
import { TabBar } from "antd-mobile";

import cookbook from "assets/images/cookbook.png";
import cookbookActive from "assets/images/cookbook-active.png";
import menu from "assets/images/menu.png";
import menuActive from "assets/images/menu-active.png";
import more from "assets/images/more.png";
import moreActive from "assets/images/more-active.png";

const CookBook = () => {
  return <h1>CookBook</h1>;
};
const Category = () => {
  return <h1>Category</h1>;
};
const More = () => {
  return <h1>More</h1>;
};

const tabbarList = [
  {
    id: 1,
    title: "菜谱大全",
    icon: cookbook,
    icon_active: cookbookActive,
    components: CookBook,
  },
  {
    id: 2,
    title: "菜单",
    icon: menu,
    icon_active: menuActive,
    components: Category,
  },
  {
    id: 3,
    title: "更多",
    icon: more,
    icon_active: moreActive,
    components: More,
  },
];

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 1,
      hidden: false,
      tabbarList,
    };
  }
  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {this.state.tabbarList.map((item) => {
            return (
              <TabBar.Item
                title={item.title}
                key={item.id}
                icon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background: `url(${item.icon}) center center /  21px 21px no-repeat`,
                    }}
                  />
                }
                selectedIcon={
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      background: `url(${item.icon_active}) center center /  21px 21px no-repeat`,
                    }}
                  />
                }
                selected={this.state.selectedTab === item.id}
                onPress={() => {
                  this.setState({
                    selectedTab: item.id,
                  });
                }}
                data-seed="logId"
              >
                {<item.components></item.components>}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}
