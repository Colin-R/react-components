import React, { Component } from 'react';

import "./assets/site-header.css"

class SiteHeader extends Component {
  render() {
    return (
      <div className="site-header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default SiteHeader;
