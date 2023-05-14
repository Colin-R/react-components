import React, { Component } from 'react';

import "./assets/input-field.css"

class InputField extends Component {
  fieldRequired() {
    return this.props.required && ' required' || '';
  }

  fieldError() {
    return this.props.error && ' error' || '';
  }

  render() {
    return (
      <label className={`input-field${this.fieldRequired()}${this.fieldError()}`}>
        {this.props.displayText} <span className="asterisk">*</span>
        <input name={this.props.displayText}
               type={this.props.type}
               min={this.props.minimum}
               autoComplete="off" />
        <span className="error">{this.props.errorText}</span>
      </label>
    );
  }
}

export default InputField;
