import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { darkestprimary } from '../colors'
import CardHead from './CardHead'
import CardDescription from './CardDescription'
import CardBehavior from './CardBehavior'
import CardMedCond from './CardMedCond'
import CardFreeText from './CardFreeText'
import Separator from './Separator'

const CardWrapper = styled.div`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;
`

export default class CatCard extends Component {
  static propTypes = {
    adoptable: PropType.bool.isRequired,
    house: PropType.string.isRequired,
    HTVNr: PropType.string.isRequired,
    inShelterSince: PropType.instanceOf(Date).isRequired,
    kennel: PropType.number,
    name: PropType.string.isRequired,
    room: PropType.oneOfType([PropType.string, PropType.number]),
    transponderNr: PropType.number,
    color: PropType.string.isRequired,
    dateOfBirth: PropType.instanceOf(Date).isRequired,
    race: PropType.string.isRequired,
    sex: PropType.oneOf(['männlich', 'weiblich', '?']).isRequired,
    spayedOrNeutered: PropType.bool.isRequired,
    aggressive: PropType.bool,
    assertive: PropType.bool,
    escapologist: PropType.bool,
    nervous: PropType.bool,
    outdoorDat: PropType.bool,
    toiletTrained: PropType.bool,
    acuteDiseases: PropType.string.isRequired,
    chronicDiseases: PropType.string.isRequired,
    medication: PropType.string.isRequired,
    nutrition: PropType.string.isRequired,
    otherTreatments: PropType.string.isRequired,
    freeTextInfo: PropType.string
  }

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
      <CardWrapper data-cy="CatCard">
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
        <Separator text="Beschreibung" />
        <CardDescription
          color={color}
          dateOfBirth={dateOfBirth}
          race={race}
          sex={sex}
          spayedOrNeutered={spayedOrNeutered}
        />
        <Separator text="Verhalten" />
        <CardBehavior
          toiletTrained={toiletTrained}
          nervous={nervous}
          aggressive={aggressive}
          escapologist={escapologist}
          assertive={assertive}
          outdoorCat={outdoorCat}
        />
        <Separator text="Gesundheitszustand" />
        <CardMedCond
          acuteDiseases={acuteDiseases}
          chronicDiseases={chronicDiseases}
          medication={medication}
          nutrition={nutrition}
          otherTreatments={otherTreatments}
        />
        <Separator text="Sonstiges" />
        <CardFreeText freeTextInfo={freeTextInfo} />
      </CardWrapper>
    )
  }
}
