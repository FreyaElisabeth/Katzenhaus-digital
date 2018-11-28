import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary, darkestprimary } from '../colors'

const StyledButton = styled.button`
  font-size: 16px;
  background: ${darkestprimary};
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0.5em;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { onClick, text } = this.props

    return <StyledButton onClick={onClick}>{text}</StyledButton>
  }
}
