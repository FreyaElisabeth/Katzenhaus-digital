import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, brightprimary } from '../colors'

const StyledFormSubmit = styled.input`
  font-size: 16px;
  background: ${brightprimary};
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0.5em;

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
