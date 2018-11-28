import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { palestprimary } from './colors'

import SearchForm from './ui/SearchForm'
import CatCard from './catCard/CatCard'

export default class App extends Component {
  state = {
    dataSets: [
      {
        name: 'Nimue',
        id: '848_A_17',
        transponderNr: '276097200023868',
        house: 'Neues Katzenhaus',
        room: '7',
        kennel: '7',
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
      },
      {
        name: 'Sir Maunzelot',
        id: '849_A_17',
        transponderNr: '276097200023869',
        house: 'Neues Katzenhaus',
        room: '7',
        kennel: '7',
        sex: 'männlich',
        spayedOrNeutered: true,
        adoptable: true,
        race: 'Norwegische Waldkatze x Sibirer x Europäisch Kurzhaar',
        color: 'silbergrau getigert',
        dateOfBirth: new Date('2008.03.21'),
        inShelterSince: new Date('2017.03.01'),
        aggressive: false,
        assertive: false,
        nervous: true,
        escapologist: true,
        outdoorCat: false,
        toiletTrained: true,
        acuteDiseases: 'Schnupfen',
        chronicDiseases: 'leichtes Übergewicht',
        nutrition: 'nur Trockenfutter',
        medication: '',
        otherTreatments: '',
        freeTextInfo:
          'Sir Maunzelot braucht viel Zuneigung, aber auch viel Zeit, um Vertrauen zu fassen.'
      },
      {
        name: 'Elvis',
        id: '327_F_01',
        transponderNr: '276097200023855',
        house: 'Altes Katzenhaus',
        room: '6',
        kennel: '7',
        sex: 'männlich',
        spayedOrNeutered: false,
        adoptable: true,
        race: 'Europäisch Kurzhaar',
        color: 'rot getigert, weiße Brust',
        dateOfBirth: new Date('2001.07.01'),
        inShelterSince: new Date('2001.08.01'),
        aggressive: false,
        assertive: true,
        nervous: false,
        escapologist: true,
        outdoorCat: true,
        toiletTrained: false,
        acuteDiseases: 'Schnupfen, Flöhe',
        chronicDiseases: '',
        nutrition: 'Aufbaufütterung',
        medication: 'Flohmittel',
        otherTreatments: 'Wärmelampe',
        freeTextInfo:
          'Elvis wurde neben seiner toten Mutter und zwei toten Geschwistern aufgefunden, die wahrscheinlich Rattengift gefressen haben.'
      }
    ],
    nameInput: '',
    idInput: '',
    transponderNrInput: '',
    houseInput: '',
    roomInput: '',
    kennelInput: ''
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <SearchForm
                  resetInputValues={this.resetInputValues}
                  onChange={this.handleChange}
                  onSubmit={this.preventDefault}
                  displayValueSelectRoom={this.state.roomInput}
                  displayValueSelectHouse={this.state.houseInput}
                  displayValueSelectKennel={this.state.kennelInput}
                />
                {this.renderSearchResults()}
              </React.Fragment>
            )}
          />
        </Wrapper>
      </Router>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name + 'Input']: event.target.value
    })
  }

  renderSearchResults = () => {
    const {
      dataSets,
      nameInput,
      idInput,
      transponderNrInput,
      houseInput,
      roomInput,
      kennelInput
    } = this.state

    return dataSets
      .filter(dataSet =>
        dataSet.name.toLowerCase().includes(nameInput.toLowerCase())
      )
      .filter(dataSet =>
        dataSet.id.toLowerCase().includes(idInput.toLowerCase())
      )
      .filter(dataSet =>
        dataSet.transponderNr.toString().includes(transponderNrInput)
      )
      .filter(dataSet =>
        dataSet.house.toLowerCase().includes(houseInput.toLowerCase())
      )
      .filter(dataSet =>
        dataSet.room
          .toString()
          .toLowerCase()
          .includes(roomInput.toLowerCase())
      )
      .filter(dataSet =>
        dataSet.kennel.toString().includes(kennelInput.toString())
      )
      .map(this.renderSingleDataSet)
  }

  renderSingleDataSet = dataSet => <CatCard key={dataSet.id} {...dataSet} />

  preventDefault = event => event.preventDefault()

  resetInputValues = () => {
    this.setState({
      nameInput: '',
      idInput: '',
      houseInput: '',
      roomInput: '',
      kennelInput: ''
    })
  }
}

const Wrapper = styled.main`
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  background: ${palestprimary};
  min-height: 100vh;
  position: relative;
`
