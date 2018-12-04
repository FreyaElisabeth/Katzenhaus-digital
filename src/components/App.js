import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  palestprimary,
  brightprimary,
  darkerprimary,
  darkestprimary
} from './colors'

import SearchScreen from './screens/SearchScreen'
import DataSetCreationScreen from './screens/DataSetCreationScreen'
import CatCard from './catCard/CatCard'

const dataSets = [
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
]

const locationData = {
  'Bitte wählen': { '-': ['-'] },
  'Altes Katzenhaus': {
    'Bitte wählen': '-',
    'Raum 1': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 2': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 3': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 4': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 5': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 6': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    Außengehege: { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    Küche: { '-': '-' }
  },
  'Neues Katzenhaus': {
    'Bitte wählen': '-',
    'Raum 1': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 2': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 3': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 4': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 5': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 6': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 7': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    'Raum 8': { 'Bitte wählen': '', 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 },
    Spielzimmer: { '-': '-' },
    Büro: { '-': '-' },
    Umkleide: { '-': '-' }
  }
}

export default class App extends Component {
  state = {
    dataSets: this.loadFromLocalStorage() || dataSets,
    nameInput: '',
    idInput: '',
    transponderNrInput: '',
    houseInput: '',
    house2Input: '',
    roomInput: '',
    kennelInput: '',
    adoptableCheckbox: false
  }

  render() {
    const {
      houseInput,
      house2Input,
      roomInput,
      kennelInput,
      adoptableCheckbox
    } = this.state

    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => (
              <SearchScreen
                resetInputValues={this.resetInputValues}
                onChange={this.handleChange}
                onSubmit={this.preventDefault}
                displayValueSelectHouse={houseInput}
                displayValueSelectRoom={roomInput}
                displayValueSelectKennel={kennelInput}
                displayValueSelectHouse2={house2Input}
                searchResults={this.renderSearchResults}
                locationOptions={locationData}
              />
            )}
          />
          <Route
            path="/dataSetCreation"
            render={() => (
              <DataSetCreationScreen
                resetInputValues={this.resetInputValues}
                onChange={this.handleChange}
                onCheck={this.handleCheck}
                onSubmit={this.createNewDataSet}
                preventDefault={this.preventDefault}
                displayValueCheckboxAdoptable={adoptableCheckbox}
                displayValueSelectHouse={houseInput}
                displayValueSelectRoom={roomInput}
                displayValueSelectKennel={kennelInput}
              />
            )}
          />
          <nav>
            <NavLink exact to="/" data-cy="navHome">
              Suche
            </NavLink>
            <NavLink to="/dataSetCreation" data-cy="navCreate">
              Datensatz anlegen
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name + 'Input']: event.target.value
    })
  }

  handleCheck = event => {
    const checkBoxChecked = event.target.checked ? true : false

    this.setState({
      [event.target.name + 'Checkbox']: checkBoxChecked
    })
  }

  handleSelect = event => {}

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

  createNewDataSet = () => {
    const {
      nameInput,
      idInput,
      transponderNrInput,
      houseInput,
      roomInput,
      kennelInput,
      adoptableCheckbox
    } = this.state

    const newDataSet = {
      name: nameInput,
      id: idInput,
      transponderNr: transponderNrInput,
      adoptable: adoptableCheckbox,
      house: houseInput,
      room: roomInput,
      kennel: kennelInput,
      inShelterSince: new Date('2018.12.01'),
      dateOfBirth: new Date('2017.01.01')
    }

    this.setState({
      dataSets: [newDataSet, ...this.state.dataSets]
    })

    this.resetInputValues()
  }

  componentDidUpdate() {
    this.saveToLocalStorage()
  }

  componentWillUnmount() {
    this.saveToLocalStorage()
  }

  resetInputValues = () => {
    this.setState({
      nameInput: '',
      idInput: '',
      houseInput: '',
      roomInput: '',
      kennelInput: '',
      transponderNrInput: '',
      adoptableCheckbox: false
    })
  }

  saveToLocalStorage = () => {
    localStorage.setItem(
      'Katzenhaus-digital',
      JSON.stringify(this.state.dataSets)
    )
  }

  loadFromLocalStorage() {
    try {
      return JSON.parse(localStorage.getItem('Katzenhaus-digital'))
    } catch (err) {
      console.log(err)
    }
  }
}

const Wrapper = styled.main`
  display: grid;
  grid-template-rows: auto 60px;
  background: ${palestprimary};
  height: 100vh;
  width: 100vw;
  position: relative;

  nav {
    display: flex;
    border-top: 1px solid ${palestprimary};

    a:any-link {
      text-decoration: none;
      color: white;
      background: ${darkerprimary};
      border: 1px solid ${darkestprimary};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;
      &:first-child {
        border-right: 1px solid ${palestprimary};
      }

      &.active {
        background: ${brightprimary};
        color: white;
      }

      img {
        height: 30px;
      }
    }
  }
`
