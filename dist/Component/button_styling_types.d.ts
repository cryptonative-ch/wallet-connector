import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
export declare enum ButtonType {
    primary = 0,
    primaryLine = 1,
    secondary = 2,
    secondaryLine = 3,
    primaryAlternative = 4
}
export interface ButtonCommonProps {
    buttonType?: ButtonType;
    theme?: any;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonCommonProps {
}
export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonCommonProps {
}
export declare const ButtonCSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
