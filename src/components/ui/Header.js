import React, { Component } from 'react'
import styled from 'styled-components'

import { white, darkestprimary, palesecondary } from '../colors'

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>{this.props.text}</h1>
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-content: flex-end;
  margin-top: 20px;

  h1 {
    background: ${white};
    color: ${darkestprimary};
    font-size: 2em;
    text-align: center;
    font-weight: bold;
    border: 1px solid ${darkestprimary};
    border-radius: 15px;
    padding: 10px 15px 12px;
    margin: 0;
  }
`
