import { HTMLAttributes } from 'react';
declare global {
    interface Window {
        provider: any;
        ethereum: any;
    }
}
interface Props extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    metamaskImage: string;
    walletImage: string;
}
export declare const WalletConnector: (props: Props) => JSX.Element;
export default WalletConnector;
