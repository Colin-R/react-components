import React, { Component } from 'react';

import "../assets/button.css"

class SubmitButton extends Component {
  render() {
    return (
      <button className="button submit-button" onClick={this.props.submitFormCallback}>
        {this.props.submitButtonText || 'Send'}
      </button>
    );
  }
}

export default SubmitButton;
