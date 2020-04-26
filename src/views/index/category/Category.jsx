import React, { Component } from "react";
import HeaderBar from "components/headerbar/HeaderBar";
import Search from "components/search/Search";
import Classify from "./components/Classify";
import Material from "./components/Material";

import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import "./category.scss";

import { get } from "utils/http";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      dir: "left",
      classifyList: [],
      materialList: [],
    };
  }

  clickHandler = (dir) => {
    this.setState(
      () => {
        return {
          dir,
        };
      },
      () => {
        // 当状态修改完毕后执行该函数
        if (this.state.dir === "left") {
          this.props.history.push("/index/category/classify");
        } else {
          this.props.history.push("/index/category/material");
        }
      }
    );
  };

  render() {
    // 取到 ` /index/category/`
    let path = this.props.match.path + "/category";
    return (
      <div>
        <HeaderBar>
          <div className="header-tab">
            <ul className={this.state.dir}>
              <li
                className={this.state.dir === "left" ? "active" : ""}
                onClick={this.clickHandler.bind(this, "left")}
              >
                分类
              </li>
              <li
                className={this.state.dir === "right" ? "active" : ""}
                onClick={this.clickHandler.bind(this, "right")}
              >
                食材
              </li>
            </ul>
          </div>
        </HeaderBar>
        <Search
          conbgcolor={"#fff"}
          inputbgcolor={"#f5f5f5"}
          placeholdertext="想吃什么搜这里，如：排骨"
        ></Search>

        <Switch>
          <Route path={`${path}/classify`}>
            <Classify list={this.state.classifyList}></Classify>
          </Route>

          <Route
            path={`${path}/material`}
            render={() => {
              return <Material list={this.state.materialList}></Material>;
            }}
          ></Route>

          <Redirect exact from={path} to={`${path}/classify`}></Redirect>
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    // 请求数据接口
    this.getClassifyList();
  }

  async getClassifyList() {
    let result = await get("/api/category");
    this.setState({
      classifyList: result.data.data.category,
      materialList: result.data.data.material,
    });
  }
}

export default withRouter(Category);
