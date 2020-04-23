import React, { Component } from 'react'
import {HeaderBarContainer} from './HeaderBar.style'
export default class HeaderBar extends Component {
  render() {
    return (
      <HeaderBarContainer>
        {this.props.children}
      </HeaderBarContainer>
    )
  }
}
