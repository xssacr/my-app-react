import React, { Component } from "react";

export default class Top10 extends Component {
  render() {
    return (
      <div className="top10-container">
        <h2>精品好菜</h2>

        <ul>
          {this.props.datalist.splice(0, 10).map((item) => {
            return (
              <li key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>
                  {item.all_click}浏览 {item.favorites}收藏
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
