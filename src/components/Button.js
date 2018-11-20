import React, { Component } from 'react'
import styled from 'styled-components'
import { palesecondary, darkestprimary } from './colors'

const StyledButton = styled.button`
  font-size: 16px;
  background: ${darkestprimary};
  color: white;
  border-radius: 5px;
  border: none;
  padding: 1%;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.text}
      </StyledButton>
    )
  }
}
