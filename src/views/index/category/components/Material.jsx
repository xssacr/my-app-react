import React, { Component } from "react";
import CateList from "components/catelist/CateList";
export default class Material extends Component {
  constructor() {
    super();
    this.state = {
      nav: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    let nav = "";
    if (state.nav) {
      nav = state.nav;
    } else {
      nav = Object.keys(props.list)[0];
    }

    return {
      nav,
    };
  }

  changeNavHandler = (item) => {
    this.setState({
      nav: item,
    });
  };

  render() {
    return (
      <CateList
        {...this.props}
        nav={this.state.nav}
        changeNav={this.changeNavHandler}
      ></CateList>
    );
  }
}
