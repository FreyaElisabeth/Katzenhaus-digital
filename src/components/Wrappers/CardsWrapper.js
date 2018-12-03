import React, { Component } from 'react'
import styled from 'styled-components'

export default class CardsWrapper extends Component {
  render() {
    return <StyledWrapper>{this.props.searchResults()}</StyledWrapper>
  }
}

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
`
