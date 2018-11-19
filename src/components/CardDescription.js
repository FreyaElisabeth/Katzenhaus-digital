import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 140px auto;
`

export default class CardHead extends Component {
  render() {
    const { color, dateOfBirth, race, sex, spayedOrNeutered } = this.props

    return (
      <SectionWrapper>
        <span>Rasse:</span> <span>{race}</span>
        <span>Farbe:</span> <span>{color}</span>
        <span>Geschlecht:</span>
        <span>
          {sex}, {spayedOrNeutered ? 'kastriert' : 'unkastriert'}
        </span>
        <span>Geburtsdatum:</span>{' '}
        <span>{dateOfBirth.toLocaleDateString('de')}</span>
      </SectionWrapper>
    )
  }
}
