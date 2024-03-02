var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var CardContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 20px;\n  max-width: 300px;\n  opacity: ", ";\n  ", "\n"], ["\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 20px;\n  max-width: 300px;\n  opacity: ", ";\n  ", "\n"])), function (props) { return (props.disabled ? 0.5 : 1); }, function (props) {
    return props.disabled &&
        "\n  cursor: not-allowed;\n";
});
var Image = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  border-radius: 4px;\n"], ["\n  width: 100%;\n  border-radius: 4px;\n"])));
var Title = styled.h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.2em;\n  margin-top: 10px;\n"], ["\n  font-size: 1.2em;\n  margin-top: 10px;\n"])));
var Content = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"])));
var Button = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 20px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: blue;\n  color: white;\n  cursor: pointer;\n"], ["\n  margin-top: 20px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  background-color: blue;\n  color: white;\n  cursor: pointer;\n"])));
var Card = function (_a) {
    var imageurl = _a.imageurl, title = _a.title, content = _a.content, buttonText = _a.buttonText, onButtonClick = _a.onButtonClick, disabled = _a.disabled;
    return (_jsxs(CardContainer, { disabled: disabled, children: [imageurl && _jsx(Image, { src: imageurl, alt: title }), _jsx(Title, { children: title }), _jsx(Content, { children: content }), buttonText && (_jsx(Button, { onClick: onButtonClick, disabled: disabled, children: buttonText }))] }));
};
export default Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Card.js.map