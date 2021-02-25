import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { ButtonCircle } from '../button_circle'
import { IconClose } from '../icons/IconClose'

interface Props extends HTMLAttributes<HTMLDivElement> {
  disableCloseButton?: boolean
  onClick?: any
  title: string
}

const ModalTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 11px 0 24px;
  height: 68px;
  flex-direction: row;
`

const ModalTitleText = styled.h2`
  color: ${props => props.theme.colors.textColorDark};
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: 17px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0 auto 0 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

class ModalTitle extends React.Component<Props> {
  public render = () => {
    const { disableCloseButton = false, onClick, title, ...restProps } = this.props

    return (
      <ModalTitleWrapper {...restProps}>
        <ModalTitleText>{title}</ModalTitleText>
        <ButtonCircle disabled={disableCloseButton} onClick={onClick}>
          <IconClose />
        </ButtonCircle>
      </ModalTitleWrapper>
    )
  }
}

export default ModalTitle
