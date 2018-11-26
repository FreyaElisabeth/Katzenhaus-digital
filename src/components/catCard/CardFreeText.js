import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const SectionWrapper = styled.section`
  margin: 10px 0;
`

export default class CardFreeText extends Component {
  static propTypes = {
    freeTextInfo: PropType.string
  }

  render() {
    const { freeTextInfo } = this.props
    return (
      <SectionWrapper data-cy="CardFreeText">{freeTextInfo}</SectionWrapper>
    )
  }
}
