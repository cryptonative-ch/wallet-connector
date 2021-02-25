import React, { HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

const cssRotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const CSSSpinner = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid #304FFE33;
  border-right: 4px solid #304FFE33;
  border-bottom: 4px solid #304FFE33;
  border-left: 4px solid #304FFE;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${cssRotate} 1.1s infinite linear;
  animation: ${cssRotate} 1.1s infinite linear;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: string
  big?: boolean | undefined
}

export const Spinner: React.FC<Props> = (_: Props) => {
  return (
    <CSSSpinner />
  )
}
