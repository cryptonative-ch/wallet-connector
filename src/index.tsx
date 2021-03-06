import React, { HTMLAttributes, useCallback, useEffect, useState, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useWallet } from 'use-wallet'
import * as ethers from 'ethers'

import { Button } from './Component/button'
import { ButtonType } from './Component/button_styling_types'
import { Spinner } from './Component/spinner'
import ModalWrapper from './Component/modal_wrapper'

import theme from './theme'

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Buttons = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 160px;
  border: 1px dashed #DDDDE3;
  border-width: 1px 0 0 0;

  &:last-child {
    margin-top: 0;
  }
`

const SpinnerContainer = styled.div`
  width: 378px;
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonStyled = styled(Button)`
  margin-bottom: 14px;
  width: 330px;
  height: 48px;
  border: 1px solid #DDDDE3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Icon = styled.img`
  height: 20px;
  margin: 0;
  width: 20px;
`;

const CurrentIcon = styled.img`
  height: 45px;
  margin: 0;
  width: 45px;
`;

const Text = styled.span`
  color: ${props => props.theme.colors.textColorDark};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin: 0;
`

const ConnectingText = styled.p`
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 24px 0;
  text-align: center;
`

declare global {
  interface Window {
    provider: any
    ethereum: any
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
      <Text>{text}</Text>
      {icon}
    </ButtonStyled>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  metamaskImage: string
  walletImage: string
}

export const WalletConnector = (props: Props) => {
  const wallet = useWallet()
  const [connectingToWalletConnect, setConnectingToWalletConnect] = useState(false)
  const [connectingToMetamask, setConnectingToMetamask] = useState(false)
  const [connectingToAuthereum, setConnectingToAuthereum] = useState(false)
  const { isOpen, onClose } = props
  const isMetamaskEnabled = 'ethereum' in window || 'web3' in window

  const onConnect = async (ethereum: any) => {
    window.provider = new ethers.providers.Web3Provider(ethereum)
    let accounts = await window.provider.listAccounts()
    if (!accounts.length) {
      try {
        await window.ethereum.enable()
        accounts = await window.provider.listAccounts()
      } catch (e) {
        return null
      }
    }
    return accounts.length ? accounts[0].toLowerCase() : null
  }

  const connectMetamask = async () => {
    setConnectingToMetamask(true)
    try {
      await wallet.connect("injected")
      setConnectingToMetamask(false)
    } catch (error) {
      setConnectingToMetamask(false)
    }
  }

  const connectWalletConnect = async () => {
    setConnectingToWalletConnect(true)
    try {
      await wallet.connect("walletconnect")
      setConnectingToWalletConnect(false)
    } catch (error) {
      setConnectingToWalletConnect(false)
    }
  }

  // const connectCoinbase = () => {
  //   wallet.connect("walletlink")
  // }

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
    if (wallet.account && wallet.ethereum) {
      onConnect(wallet.ethereum)
      onClose && onClose()
    }
  }, [wallet, onClose])

  const isConnectingToWallet = connectingToMetamask || connectingToWalletConnect || connectingToAuthereum
  let connectingText = `Connect MetaMask to Mesa`
  if (connectingToWalletConnect) {
    connectingText = 'Connect Wallet to Mesa'
  }

  const disableMetamask: boolean = !isMetamaskEnabled || false
  const disableWalletConnect = false
  // const disableAuthereum = false

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <ModalWrapper
          isOpen={!wallet.account && isOpen}
          onRequestClose={onClickCloseButton}
          shouldCloseOnOverlayClick={!isConnectingToWallet}
          title={isConnectingToWallet ? undefined : 'Connect to a Wallet'}
        >
          <ContentWrapper>
            {isConnectingToWallet ? (
              <Fragment>
                <SpinnerContainer>
                  {connectingToMetamask && (<CurrentIcon alt="" src={props.metamaskImage} />)}
                  {connectingToWalletConnect && (<CurrentIcon alt="" src={props.walletImage} />)}
                  <ConnectingText>{connectingText}</ConnectingText>
                  <Spinner />
                </SpinnerContainer>
              </Fragment>
            ) : (
                <Fragment>
                  <Buttons>
                    <ConnectButton
                      disabled={disableMetamask}
                      icon={<Icon alt="" src={props.metamaskImage} />}
                      onClick={connectMetamask}
                      text="Metamask"
                    />

                    <ConnectButton
                      disabled={disableWalletConnect}
                      icon={<Icon alt="" src={props.walletImage} />}
                      onClick={connectWalletConnect}
                      text="Wallet Connect"
                    />

                    {/* <ConnectButton
                      disabled={disableAuthereum}
                      icon={<Icon alt="" src={require('./img/authereum.svg')} />}
                      onClick={connectCoinbase}
                      text="Authereum"
                    /> */}
                  </Buttons>
                </Fragment>
              )}
          </ContentWrapper>
        </ModalWrapper>
      </Fragment>
    </ThemeProvider>
  )
}

export default WalletConnector
