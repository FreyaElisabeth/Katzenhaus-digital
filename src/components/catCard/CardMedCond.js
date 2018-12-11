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
      align-items: flex-end;
    }
  }
`

export default class CardMedCond extends Component {
  static propTypes = {
    acuteDiseases: PropType.string.isRequired,
    chronicDiseases: PropType.string.isRequired,
    medication: PropType.string.isRequired,
    nutrition: PropType.string.isRequired,
    otherTreatments: PropType.string.isRequired
  }

  render() {
    const {
      acuteDiseases,
      chronicDiseases,
      medication,
      nutrition,
      otherTreatments
    } = this.props

    return (
      <SectionWrapper data-cy="CardMedCond">
        <div>
          <span>Akute Erkrankungen:</span>
          <span>{acuteDiseases}</span>
        </div>
        <div>
          <span>Chronische Erkrankungen:</span>
          <span>{chronicDiseases}</span>
        </div>
        <div>
          <span>Medikamente:</span>
          <span>{medication}</span>
        </div>
        <div>
          <span>Ernährung:</span>
          <span>{nutrition}</span>
        </div>
        <div>
          <span>Sonstige Behandlung:</span>
          <span>{otherTreatments}</span>
        </div>
      </SectionWrapper>
    )
  }
}
