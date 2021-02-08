import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLDivElement> {
    disableCloseButton?: boolean;
    onClick?: any;
    title: string;
}
declare class ModalTitle extends React.Component<Props> {
    render: () => JSX.Element;
}
export default ModalTitle;
