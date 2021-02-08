import React, { HTMLAttributes, useCallback, useEffect, useState, Fragment } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import { useWallet } from 'use-wallet'
import * as ethers from 'ethers'

import { Button } from './Component/button'
import { ButtonType } from './Component/button_styling_types'
import { MadeBy } from './Component/made_by'
import { Spinner } from './Component/spinner'
import ModalWrapper from './Component/modal_wrapper'

import theme from './theme'

import AuthereumSVG from './img/authereum.svg'
import MetaMaskSVG from './img/metamask.svg'
import WalletConnectSVG from './img/wallet_connect.svg'

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 230px;
  padding: 15px 0 0;
`

const Buttons = styled.div`
  margin-top: auto;

  &:last-child {
    margin-top: 0;
  }
`

const ButtonStyled = styled(Button)`
  margin-bottom: 14px;
  width: 200px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Icon = css`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: 22px;
  margin: 0 15px 0 0;
  width: 22px;
`

const IconMetaMask = styled.span`
  ${Icon}
  background-image: url('${MetaMaskSVG}');
`

const IconWalletConnect = styled.span`
  ${Icon}
  background-image: url('${WalletConnectSVG}');
`

const IconAuthereum = styled.span`
  ${Icon}
  background-image: url('${AuthereumSVG}');
`

const Text = styled.span`
  color: ${props => props.theme.colors.textColorDark};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
`

const ConnectingText = styled.p`
  color: ${props => props.theme.colors.textColorLighter};
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0.4px;
  line-height: 1.5;
  margin: 0;
  padding: 30px 0 0;
  text-align: center;
`

declare global {
  interface Window {
    provider: any;
    ethereum: any;
  }
}

interface ButtonProps {
  disabled: boolean
  onClick: () => void
  icon: React.ReactNode
  text: string
}

const ConnectButton = (props: ButtonProps) => {
  const { disabled, icon, onClick, text } = props

  return (
    <ButtonStyled buttonType={ButtonType.secondaryLine} disabled={disabled} onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </ButtonStyled>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

export const WalletConnector = (props: Props) => {
  const wallet = useWallet()
  const [connectingToWalletConnect, setConnectingToWalletConnect] = useState(false)
  const [connectingToMetamask, setConnectingToMetamask] = useState(false)
  const [connectingToAuthereum, setConnectingToAuthereum] = useState(false)
  const { isOpen, onClose } = props
  const isMetamaskEnabled = 'ethereum' in window || 'web3' in window

  const onConnect = async (ethereum: any) => {
    window.provider = new ethers.providers.Web3Provider(ethereum);
    let accounts = await window.provider.listAccounts();
    if (!accounts.length) {
      try {
        await window.ethereum.enable();
        accounts = await window.provider.listAccounts();
      } catch (e) {
        return null;
      }
    }
    return accounts.length ? accounts[0].toLowerCase() : null;
  };

  const connectMetamask = () => {
    wallet.connect("injected");
  };

  const connectWalletConnect = () => {
    wallet.connect("walletconnect");
  };

  const connectCoinbase = () => {
    wallet.connect("walletlink");
  };

  const resetEverything = useCallback(() => {
    setConnectingToWalletConnect(false)
    setConnectingToMetamask(false)
    setConnectingToAuthereum(false)
  }, [])

  const onClickCloseButton = useCallback(() => {
    resetEverything() // we need to do this or the states and functions will keep executing even when the modal is closed by the user
    onClose()
  }, [onClose, resetEverything])

  useEffect(() => {
    if (wallet.account) {
      onConnect(wallet);
      onClose && onClose();
    }
  }, [wallet, onClose]);

  const isConnectingToWallet = connectingToMetamask || connectingToWalletConnect || connectingToAuthereum
  let connectingText = `Connecting to wallet`
  if (connectingToMetamask) {
    connectingText = 'Waiting for Approval on Metamask'
  }
  if (connectingToWalletConnect) {
    connectingText = 'Opening QR for Wallet Connect'
  }

  const disableMetamask: boolean = !isMetamaskEnabled || false
  const disableWalletConnect = false
  const disableAuthereum = false

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <ModalWrapper
          isOpen={!wallet.account && isOpen}
          onRequestClose={onClickCloseButton}
          shouldCloseOnOverlayClick={!isConnectingToWallet}
          title={connectingToMetamask ? 'Connecting...' : 'Connect a Wallet'}
        >
          <ContentWrapper>
            {isConnectingToWallet ? (
              <Fragment>
                <Spinner />
                <ConnectingText>{connectingText}</ConnectingText>
              </Fragment>
            ) : (
                <Fragment>
                  <Buttons>
                    <ConnectButton
                      disabled={disableMetamask}
                      icon={<IconMetaMask />}
                      onClick={connectMetamask}
                      text="Metamask"
                    />

                    <ConnectButton
                      disabled={disableWalletConnect}
                      icon={<IconWalletConnect />}
                      onClick={connectWalletConnect}
                      text="Wallet Connect"
                    />

                    <ConnectButton
                      disabled={disableAuthereum}
                      icon={<IconAuthereum />}
                      onClick={connectCoinbase}
                      text="Authereum"
                    />
                  </Buttons>
                </Fragment>
              )}
          </ContentWrapper>
          <MadeBy />
        </ModalWrapper>
      </Fragment>
    </ThemeProvider>
  )
}

export default WalletConnector
