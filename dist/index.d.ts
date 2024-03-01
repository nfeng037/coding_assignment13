import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isSuccess?: boolean;
    isError?: boolean;
    isWarning?: boolean;
}

declare const Button: React.FC<ButtonProps>;

interface LabelProps {
    text?: string;
    size?: 'small' | 'medium' | 'large';
    htmlFor: string;
    color?: string;
    disabled?: boolean;
}

declare const Label: React.FC<LabelProps>;

interface TextProps {
    text?: string;
    types?: 'header' | 'paragraph' | 'copyright';
    bold?: boolean;
    italic?: boolean;
    disabled?: boolean;
}

declare const Text: React.FC<TextProps>;

export { Button, Label, Text };
