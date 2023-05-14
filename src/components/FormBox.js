import React, { Component } from 'react';

import InputField from './InputField';
import SubmitButton from './SubmitButton';

import "../assets/form-box.css"

class FormBox extends Component {
  constructor(props) {
    super(props);
    this.submitFormCallback = this.submitFormCallback.bind(this);
    this.state = {
      formData: this.props,
    }
  }

  submitFormCallback(event) {
    event.preventDefault();
    const formData = this.getFormData();
    const formErrors = this.validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      this.state.formData.submitCallback(formData);
    }
    this.setState(this.state);
  }

  getFormData() {
    let formData = {};
    for (const pair of new FormData(document.forms.FormBox).entries()) {
      formData[pair[0]] = pair[1];
    }
    return formData
  }

  validateForm(formData) {
    let formErrors = [];

    Object.keys(formData).forEach((key) => {
      const currentFieldIndex = this.state.formData.formFields.findIndex(field => field.displayText === key);
      let currentField = this.state.formData.formFields[currentFieldIndex];
      if (currentField.required && !formData[key]) {
        formErrors[currentField.displayText] = 'required';
        this.state.formData.formFields[currentFieldIndex].error = true;
      } else {
        this.state.formData.formFields[currentFieldIndex].error = false;
      }
    });

    return formErrors;
  }

  render() {
    return (
      <div className="form-box">
          {this.state.formData.title && <h2 className="title">{this.state.formData.title}</h2>}
          {this.state.formData.subTitle && <h3 className="sub-title">{this.state.formData.subTitle}</h3>}
          {this.state.formData.description && <p className="description">{this.state.formData.description}</p>}

          <form action="" method="post" id="FormBox">

            {this.state.formData.formFields.map((field, index) => {
              if (['text', 'number'].includes(field.type)) {
                return (<InputField {...field}
                                    errorText="This field is required"
                                    key={index} />)
              }
            })}

            <SubmitButton submitFormCallback={this.submitFormCallback}
                          submitButtonText={this.state.formData.submitButtonText} />
          </form>
      </div>
    );
  }
}

export default FormBox;
