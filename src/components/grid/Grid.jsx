import React, { Component } from "react";
import { GridContainer } from "./grid.style";
export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }
  render() {
    return (
      <GridContainer col={this.props.col}>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </GridContainer>
    );
  }
}
