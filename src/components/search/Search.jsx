import React, { Component } from "react";
import {
  SearchContainer,
  InputContainer,
  InputContainerBorder,
} from "./Search.style";

export default class Search extends Component {
  render() {

    // 根据属性判断使用哪个组件 
    let InputWrapper = this.props.hasborder ? InputContainerBorder : InputContainer;
    
    return (
      // 要把参数传递给样式组件，可以根据参数调整样式
      <SearchContainer {...this.props}>
        <InputWrapper {...this.props}>
          <i></i>
          <input type="text" placeholder={this.props.placeholdertext} />
        </InputWrapper>
      </SearchContainer>
    );
  }
}
