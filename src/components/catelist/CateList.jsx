import React, { Component } from "react";
import { CategoryContainer,BorderCateContainer } from "./CateList.style";

export default class CateList extends Component {
  render() {
    let { list, nav, changeNav } = this.props;
    let contentList = list[nav] || [];
    return (
      <BorderCateContainer>
        <div>
          <ul>
            {Object.keys(list).map((item, index) => {
              return (
                <li
                  className={nav === item ? "active" : ""}
                  key={item}
                  onClick={() => changeNav(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            {
              contentList.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </BorderCateContainer>
    );
  }
}
