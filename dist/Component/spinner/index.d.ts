import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    color?: string;
    size?: string;
    big?: boolean | undefined;
}
export declare const Spinner: React.FC<Props>;
export {};
