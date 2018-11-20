import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 10px 0;
`

export default class CardFreeText extends Component {
  render() {
    const { freeTextInfo } = this.props
    return <SectionWrapper>{freeTextInfo}</SectionWrapper>
  }
}
