import React, { Component } from 'react'
import styled from 'styled-components'

import { darkestprimary } from '../colors'

export default class Header extends Component {
  render() {
    return <StyledHeadline>{this.props.text}</StyledHeadline>
  }
}

const StyledHeadline = styled.h1`
  color: ${darkestprimary};
  font-size: 2em;
  margin: 20px 0 0;
  text-align: center;
  font-weight: bold;
`
