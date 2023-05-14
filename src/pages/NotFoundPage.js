import React, { Component } from 'react';

import LinkBackPage from './LinkBackPage';

class NotFoundPage extends Component {
  title() {
    return this.props.title || "Oops! You seem to be lost.";
  }

  render() {
    return <LinkBackPage title={this.title()}
                         linkTitle={this.props.linkTitle}
                         linkUrl={this.props.linkUrl} />
  }
}

export default NotFoundPage;
