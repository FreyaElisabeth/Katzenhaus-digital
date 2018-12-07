import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

export default class CardsWrapper extends Component {
  static propTypes = {
    searchResults: PropType.func.isRequired
  }

  render() {
    return <StyledWrapper>{this.props.searchResults()}</StyledWrapper>
  }
}

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
`
