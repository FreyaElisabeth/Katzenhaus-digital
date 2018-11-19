import React, { Component } from 'react'
import SectionWrapper from './SectionWrapper'

export default class CardHead extends Component {
  render() {
    const { color, dateOfBirth, race, sex, spayedOrNeutered } = this.props

    return (
      <SectionWrapper m="0 0 10px 0">
        Rasse: {race}
        <br />
        Farbe: {color}
        <br />
        Geschlecht: {sex}, {spayedOrNeutered ? 'kastriert' : 'unkastriert'}
        <br />
        Geburtsdatum: {dateOfBirth.toLocaleDateString('de')}
      </SectionWrapper>
    )
  }
}
