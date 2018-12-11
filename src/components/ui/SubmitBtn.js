import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { brightsecondary, darkersecondary, palesecondary } from '../colors'

const StyledFormSubmit = styled.input`
  font-size: 24px;
  font-weight: bold;
  background: ${brightsecondary};
  color: white;
  border-radius: 15px;
  border: 1px outset ${darkersecondary};
  padding: 0.5em 1em;
  margin-top: 20px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class SubmitBtn extends Component {
  static propTypes = {
    text: PropType.string.isRequired
  }

  render() {
    const { text } = this.props

    return <StyledFormSubmit type="submit" name={text} value={text} />
  }
}
