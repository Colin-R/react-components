import React, { Component } from 'react';

import "../assets/button.css"

class Button extends Component {
  render() {
    return (
      <a href={`${this.props.url}`}>
        <button className="button">
          <div className="title">{this.props.title}</div>
          {this.props.subTitle && <div className="sub-title">{this.props.subTitle}</div>}

        </button>
      </a>
    );
  }
}

export default Button;
