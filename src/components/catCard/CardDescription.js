import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { offwhite } from '../colors'

const SectionWrapper = styled.section`
  display: grid;
  grid-gap: 5px;
  margin: 10px 0;

  div {
    display: grid;
    grid-template-columns: 240px auto;
    grid-gap: 10px;
    border-radius: 5px;
    padding: 0 5px;

    &:nth-child(odd) {
      background: ${offwhite};
      padding: 5px;
    }

    span {
      display: flex;
      align-items: flex-start;

      &:nth-child(even) {
        align-items: flex-end;
      }
    }
  }
`

export default class CardHead extends Component {
  static propTypes = {
    color: PropType.string.isRequired,
    dateOfBirth: PropType.string.isRequired,
    race: PropType.string.isRequired,
    sex: PropType.oneOf(['männlich', 'weiblich', '?']).isRequired,
    spayedOrNeutered: PropType.bool.isRequired
  }

  render() {
    const { color, dateOfBirth, race, sex, spayedOrNeutered } = this.props

    return (
      <SectionWrapper data-cy="CardDescription">
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
          <span>{new Date(dateOfBirth).toLocaleDateString('de')}</span>
        </div>
      </SectionWrapper>
    )
  }
}
