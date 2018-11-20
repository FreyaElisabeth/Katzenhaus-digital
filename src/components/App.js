import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  palestprimary,
  paleprimary,
  brightprimary,
  darkerprimary,
  darkestprimary,
  palestsecondary,
  palesecondary,
  brightsecondary,
  darkersecondary,
  darkestsecondary
} from './colors'

import DataScreen from './DataScreen'

export default class App extends Component {
  state = {
    name: 'Nimue',
    HTVNr: '848_A_17',
    transponderNr: 276097200023868,
    house: 'Neues Katzenhaus',
    room: 9,
    kennel: 7,
    sex: 'weiblich',
    spayedOrNeutered: true,
    adoptable: true,
    race: 'Europäisch Kurzhaar',
    color: 'braun-schwarz getigert',
    dateOfBirth: new Date('2005.04.29'),
    inShelterSince: new Date('2017.03.01'),
    aggressive: false,
    assertive: true,
    nervous: false,
    escapologist: true,
    outdoorCat: false,
    toiletTrained: true,
    acuteDiseases: 'Schnupfen',
    chronicDiseases: 'Übergewicht',
    nutrition: 'nur Trockenfutter',
    medication: '',
    otherTreatments: '',
    freeTextInfo:
      'Nimue muss dringend abnehmen, am besten über mehrere Monate hinweg.'
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
    } = this.state

    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => (
              <DataScreen
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
            )}
          />
          {/* <nav>
            <NavLink exact to="/">
              CatCard
            </NavLink>
          </nav> */}
        </Wrapper>
      </Router>
    )
  }
}

const Wrapper = styled.main`
  padding: 20px;
  background: ${palestprimary};
  min-height: 100vh;
`
