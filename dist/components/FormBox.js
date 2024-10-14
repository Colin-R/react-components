"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _InputField = _interopRequireDefault(require("./InputField"));
var _SubmitButton = _interopRequireDefault(require("./SubmitButton"));
require("./assets/form-box.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class FormBox extends _react.Component {
  constructor(props) {
    super(props);
    this.submitFormCallback = this.submitFormCallback.bind(this);
    this.state = {
      formData: this.props
    };
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
    return formData;
  }
  validateForm(formData) {
    let formErrors = [];
    Object.keys(formData).forEach(key => {
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
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "form-box"
    }, this.state.formData.title && /*#__PURE__*/_react.default.createElement("h2", {
      className: "title"
    }, this.state.formData.title), this.state.formData.subTitle && /*#__PURE__*/_react.default.createElement("h3", {
      className: "sub-title"
    }, this.state.formData.subTitle), this.state.formData.description && /*#__PURE__*/_react.default.createElement("p", {
      className: "description"
    }, this.state.formData.description), /*#__PURE__*/_react.default.createElement("form", {
      action: "",
      method: "post",
      id: "FormBox"
    }, this.state.formData.formFields.map((field, index) => {
      if (['text', 'number'].includes(field.type)) {
        return /*#__PURE__*/_react.default.createElement(_InputField.default, _extends({}, field, {
          errorText: "This field is required",
          key: index
        }));
      }
    }), /*#__PURE__*/_react.default.createElement(_SubmitButton.default, {
      submitFormCallback: this.submitFormCallback,
      submitButtonText: this.state.formData.submitButtonText
    })));
  }
}
var _default = FormBox;
exports.default = _default;