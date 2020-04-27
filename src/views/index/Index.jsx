import React, { Component } from "react";
import { TabBar } from "antd-mobile";

import CookBook from "./cookbook/CookBook";
import Category from "./category/Category";
import MapComponent from "./map/Map";
import More from "./more/More";

import { MapConsumer } from "context/MapContext";

import cookbook from "assets/images/cookbook.png";
import cookbookActive from "assets/images/cookbook-active.png";
import menu from "assets/images/menu.png";
import menuActive from "assets/images/menu-active.png";
import more from "assets/images/more.png";
import moreActive from "assets/images/more-active.png";
import map from "assets/images/location.png";
import mapActive from "assets/images/location-active.png";

const tabbarList = [
  {
    id: "cookbook",
    title: "菜谱大全",
    icon: cookbook,
    icon_active: cookbookActive,
    components: CookBook,
  },
  {
    id: "category",
    title: "菜单",
    icon: menu,
    icon_active: menuActive,
    components: Category,
  },
  {
    id: "more",
    title: "更多",
    icon: more,
    icon_active: moreActive,
    components: More,
  },
];

const mapTab = {
  id: "map",
  title: "地图",
  icon: map,
  icon_active: mapActive,
  components: MapComponent,
};

// tabbarList.splice(2, 0, mapTab);

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: "cookbook",
      hidden: false,
      tabbarList,
    };
  }
  render() {
   
    return (
      
      <MapConsumer>
        {({isShowMap}) => {
          if (isShowMap) {
            // 显示
            if (this.state.tabbarList.length === 3) {
              // 插入数据
              this.state.tabbarList.splice(2,0,mapTab)
            }
          } else {
            // 隐藏
            if (this.state.tabbarList.length === 4) {
              // 删除数据
              this.state.tabbarList.splice(2, 1);
            }
          }
          return (
            <div
              style={{
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
              }}
            >
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
                        let { path } = this.props.match;
                        this.props.history.push(path + "/" + item.id);
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
        }}
      </MapConsumer>
    );
  }
}
