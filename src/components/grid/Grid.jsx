import React, { Component } from "react";
import { GridContainer } from "./grid.style";
export default class Grid extends Component {
  render() {
    return (
      <GridContainer col={this.props.col}>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <img src={item.img} alt="" />
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
