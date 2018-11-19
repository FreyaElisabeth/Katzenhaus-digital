import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 220px auto;
`

export default class CardMedCond extends Component {
  render() {
    const {
      acuteDiseases,
      chronicDiseases,
      medication,
      nutrition,
      otherTreatments
    } = this.props

    return (
      <SectionWrapper>
        <span>Akute Erkrankungen:</span> <span>{acuteDiseases}</span>
        <span>Chronische Erkrankungen:</span> <span>{chronicDiseases}</span>
        <span>Medikamente:</span> <span>{medication}</span>
        <span>Ernährung:</span> <span>{nutrition}</span>
        <span>Sonstige Behandlung:</span> <span>{otherTreatments}</span>
      </SectionWrapper>
    )
  }
}
