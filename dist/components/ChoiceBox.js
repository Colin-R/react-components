"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _LinkButton = _interopRequireDefault(require("./LinkButton"));
var _SubTitle = _interopRequireDefault(require("./SubTitle"));
require("./assets/choice-box.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class ChoiceBox extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "choice-box"
    }, /*#__PURE__*/_react.default.createElement(_SubTitle.default, {
      subtitle: this.props.question
    }), this.props.choices.map((choice, index) => /*#__PURE__*/_react.default.createElement("span", {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_LinkButton.default, {
      title: choice.title,
      subTitle: choice.subTitle,
      url: choice.url
    }))));
  }
}
var _default = ChoiceBox;
exports.default = _default;