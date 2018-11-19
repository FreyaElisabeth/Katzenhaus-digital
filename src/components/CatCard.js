import React, { Component } from 'react'
import styled from 'styled-components'
import { darkestprimary } from './colors'
import CardHead from './CardHead'
import CardDescription from './CardDescription'

const CardWrapper = styled.main`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;
`

export default class CatCard extends Component {
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
      <CardWrapper>
        <CardHead
          adoptable={adoptable}
          house={house}
          HTVNr={HTVNr}
          inShelterSince={inShelterSince}
          kennel={kennel}
          name={name}
          room={room}
          transponderNr={transponderNr}
        />
        <CardDescription
          color={color}
          dateOfBirth={dateOfBirth}
          race={race}
          sex={sex}
          spayedOrNeutered={spayedOrNeutered}
        />
      </CardWrapper>
    )
  }
}
