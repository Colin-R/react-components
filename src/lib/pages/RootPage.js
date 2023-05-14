import { Outlet } from "react-router-dom";
import React, { Component } from 'react';

import SiteHeader from '../components/SiteHeader';

class RootPage extends Component {
  render() {
    return (
      <div>
        <SiteHeader title={this.props.title} />
        <Outlet />
      </div>
    );
  }
}

export default RootPage;
