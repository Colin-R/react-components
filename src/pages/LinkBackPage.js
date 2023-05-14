import React, { Component } from 'react';

import Button from '../components/LinkButton';

class LinkBackPage extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Button title={this.props.linkTitle} url={this.props.linkUrl} />
      </div>
    )
  }
}

export default LinkBackPage;
