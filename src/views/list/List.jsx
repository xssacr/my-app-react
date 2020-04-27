import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { ListContainer } from "./List.style";

export default class List extends Component {
  leftClick = () => {
    this.props.history.go(-1);
  };

  render() {
    return (
      <ListContainer>
        <NavBar
          icon={<Icon type="left" />}
          rightContent={<Icon key="0" type="search" />}
          onLeftClick={this.leftClick}
        >
          <input type="text" />
        </NavBar>
        ListPage....
      </ListContainer>
    );
  }
}
