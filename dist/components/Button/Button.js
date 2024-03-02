var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { typeScale } from '../../utils';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 3px;\n  display: inline-block;\n  padding: ", ";\n  border: none;\n  font-size: ", ";\n  border-radius: 1rem;\n  min-width: 80px;\n  cursor: pointer;\n  font-family: \"Playfair Display\", serif;\n  transition:\n    background-color 0.3s linear,\n    color 0.3s linear;\n\n  background-color: ", ";\n\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus {\n    outline: 2px solid ", ";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  border-radius: 3px;\n  display: inline-block;\n  padding: ", ";\n  border: none;\n  font-size: ", ";\n  border-radius: 1rem;\n  min-width: 80px;\n  cursor: pointer;\n  font-family: \"Playfair Display\", serif;\n  transition:\n    background-color 0.3s linear,\n    color 0.3s linear;\n\n  background-color: ", ";\n\n  color: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus {\n    outline: 2px solid ", ";\n    outline-offset: 2px;\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
    return props.size === 'small'
        ? '8px'
        : props.size === 'medium'
            ? '12px 25px'
            : '18px 32px';
}, typeScale.paragraph, function (props) {
    return props.primary === true
        ? props.theme.primaryColor
        : props.theme.secondaryColor;
}, function (props) {
    return props.primary
        ? props.theme.textColorOnPrimary
        : props.theme.textColorOnSecondary;
}, function (props) {
    return props.primary
        ? props.theme.primaryHoverColor
        : props.theme.secondaryHoverColor;
}, function (props) { return props.theme.primaryColor; }, function (props) {
    return props.primary
        ? props.theme.primaryActiveColor
        : props.theme.secondaryActiveColor;
}, function (props) { return props.theme.disabled; }, function (props) { return props.theme.textOnDisabled; }, function (props) {
    return props.isSuccess &&
        "\n    background-color: ".concat(props.theme.status.successColor, ";\n    &:hover {\n      background-color: ").concat(props.theme.status.successHoverColor, ";\n    }\n    &:focus {\n      outline: 2px solid ").concat(props.theme.status.successColor, ";\n      outline-offset: 2px;\n    }\n    &:active {\n      background-color: ").concat(props.theme.status.successActiveColor, ";\n    }\n  ");
}, function (props) {
    return props.isError &&
        "\n    background-color: ".concat(props.theme.status.errorColor, ";\n    &:hover {\n      background-color: ").concat(props.theme.status.errorHoverColor, ";\n    }\n    &:focus {\n      outline: 2px solid ").concat(props.theme.status.errorColor, ";\n      outline-offset: 2px;\n    }\n    &:active {\n      background-color: ").concat(props.theme.status.errorActiveColor, ";\n    }\n  ");
}, function (props) {
    return props.isWarning &&
        "\n    background-color: ".concat(props.theme.status.warningColor, ";\n    &:hover {\n      background-color: ").concat(props.theme.status.warningHoverColor, ";\n    }\n    &:focus {\n      outline: 2px solid ").concat(props.theme.status.warningColor, ";\n      outline-offset: 2px;\n    }\n    &:active {\n      background-color: ").concat(props.theme.status.warningActiveColor, ";\n    }\n  ");
});
var Button = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, text = _a.text, onClick = _a.onClick, props = __rest(_a, ["size", "disabled", "text", "onClick"]);
    return (_jsx(StyledButton, __assign({ type: "button", onClick: onClick, disabled: disabled, size: size }, props, { "aria-disabled": disabled ? true : undefined, children: text })));
};
export default Button;
var templateObject_1;
//# sourceMappingURL=Button.js.map