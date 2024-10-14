"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./assets/input-field.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class InputField extends _react.Component {
  fieldRequired() {
    return this.props.required && ' required' || '';
  }
  fieldError() {
    return this.props.error && ' error' || '';
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: `input-field${this.fieldRequired()}${this.fieldError()}`
    }, this.props.displayText, " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "asterisk"
    }, "*"), /*#__PURE__*/_react.default.createElement("input", {
      name: this.props.displayText,
      type: this.props.type,
      min: this.props.minimum,
      autoComplete: "off"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "error"
    }, this.props.errorText));
  }
}
var _default = InputField;
exports.default = _default;