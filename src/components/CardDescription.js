import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  display: grid;
  grid-gap: 5px;
  margin: 10px 0;

  div {
    display: grid;
    grid-template-columns: 30% auto;
    grid-gap: 10px;

    span {
      display: flex;
      align-items: flex-end;
      word-break: break-all;
    }
  }
`

export default class CardHead extends Component {
  render() {
    const { color, dateOfBirth, race, sex, spayedOrNeutered } = this.props

    return (
      <SectionWrapper>
        <div>
          <span>Rasse: </span>
          <span>{race}</span>
        </div>
        <div>
          <span>Farbe: </span>
          <span>{color}</span>
        </div>
        <div>
          <span>Geschlecht: </span>
          <span>
            {sex}, {spayedOrNeutered ? 'kastriert' : 'unkastriert'}
          </span>
        </div>
        <div>
          <span>Geburts&shy;datum:</span>
          <span>{dateOfBirth.toLocaleDateString('de')}</span>
        </div>
      </SectionWrapper>
    )
  }
}
