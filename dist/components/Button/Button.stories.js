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
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from 'styled-components';
import Button from './Button';
import { defaultTheme, darkTheme } from '../../utils';
var meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {}
};
export default meta;
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var DefaultTheme = Template.bind({});
DefaultTheme.args = {
    primary: true,
    size: 'medium',
    text: 'Default Button'
};
DefaultTheme.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: defaultTheme, children: _jsx(Story, {}) })); }
];
export var DarkTheme = Template.bind({});
DarkTheme.args = {
    primary: true,
    size: 'medium',
    text: 'Dark Theme Button'
};
DarkTheme.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: darkTheme, children: _jsx(Story, {}) })); }
];
export var Small = Template.bind({});
Small.args = {
    primary: true,
    size: 'small',
    text: 'Small Button'
};
Small.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: defaultTheme, children: _jsx(Story, {}) })); }
];
export var Large = Template.bind({});
Large.args = {
    primary: true,
    size: 'large',
    text: 'Large Button'
};
Large.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: defaultTheme, children: _jsx(Story, {}) })); }
];
export var Disabled = Template.bind({});
Disabled.args = {
    primary: true,
    size: 'medium',
    text: 'Disabled',
    disabled: true
};
Disabled.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: darkTheme, children: _jsx(Story, {}) })); }
];
export var Success = Template.bind({});
Success.args = {
    primary: true,
    size: 'medium',
    text: 'Success',
    isSuccess: true
};
Success.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: darkTheme, children: _jsx(Story, {}) })); }
];
export var Error = Template.bind({});
Error.args = {
    primary: true,
    size: 'medium',
    text: 'Error',
    isError: true
};
Error.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: darkTheme, children: _jsx(Story, {}) })); }
];
export var Warning = Template.bind({});
Warning.args = {
    primary: true,
    size: 'medium',
    text: 'Warning',
    isWarning: true
};
Warning.decorators = [
    function (Story) { return (_jsx(ThemeProvider, { theme: darkTheme, children: _jsx(Story, {}) })); }
];
//# sourceMappingURL=Button.stories.js.map