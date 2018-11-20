import React, { Component } from 'react'
import CatCard from './CatCard'

export default class DataScreen extends Component {
  render() {
    const {
      acuteDiseases,
      adoptable,
      aggressive,
      assertive,
      chronicDiseases,
      color,
      dateOfBirth,
      escapologist,
      freeTextInfo,
      house,
      HTVNr,
      inShelterSince,
      kennel,
      medication,
      name,
      nervous,
      nutrition,
      otherTreatments,
      outdoorCat,
      race,
      room,
      sex,
      spayedOrNeutered,
      toiletTrained,
      transponderNr
    } = this.props

    return (
      <CatCard
        acuteDiseases={acuteDiseases}
        adoptable={adoptable}
        aggressive={aggressive}
        assertive={assertive}
        chronicDiseases={chronicDiseases}
        color={color}
        dateOfBirth={dateOfBirth}
        escapologist={escapologist}
        freeTextInfo={freeTextInfo}
        house={house}
        HTVNr={HTVNr}
        inShelterSince={inShelterSince}
        kennel={kennel}
        medication={medication}
        name={name}
        nervous={nervous}
        nutrition={nutrition}
        otherTreatments={otherTreatments}
        outdoorCat={outdoorCat}
        race={race}
        room={room}
        sex={sex}
        spayedOrNeutered={spayedOrNeutered}
        toiletTrained={toiletTrained}
        transponderNr={transponderNr}
      />
    )
  }
}
