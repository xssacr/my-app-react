import React, { Component } from "react";
import { GridContainer } from "./grid.style";
export default class Grid extends Component {
  render() {
    // 开放封闭的原则，一旦封装了，不建议修改源码,如果可以修改，建议提供接口
    return (
      <GridContainer col={this.props.col}>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index} onClick={this.props.itemCilck.bind(this, item)}>
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </li>
            );
          })}
          <li>更多</li>
        </ul>
      </GridContainer>
    );
  }
}
