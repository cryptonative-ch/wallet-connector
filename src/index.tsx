import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const WalletConnector = ({ text }: Props) => {
  return <div className={styles.test}>Wallet Component: {text}</div>
}

export default WalletConnector
