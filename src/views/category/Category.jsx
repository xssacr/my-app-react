import React, { Component } from "react";
import HeaderBar from "components/headerbar/HeaderBar";
import "./category.scss";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: true,
    };
  }

  clickHandler = (event) => {
    this.setState({
      isSelected: event.target.innerHTML === "食材" ? false : true,
    });
  };

  render() {
    return (
      <div>
        <HeaderBar>
          <div className="header-tab">
            <ul className={this.state.isSelected ? 'left' : 'right'}>
              <li
                className={this.state.isSelected ? "active" : ""}
                onClick={this.clickHandler}
              >
                分类
              </li>
              <li
                className={this.state.isSelected ? "" : "active"}
                onClick={this.clickHandler}
              >
                食材
              </li>
            </ul>
          </div>
        </HeaderBar>
      </div>
    );
  }
}
