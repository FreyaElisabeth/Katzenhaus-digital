import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getCats, postCat } from '../services/cats'

import {
  paleprimary,
  palestprimary,
  brightprimary,
  darkerprimary,
  darkestprimary
} from './colors'
import SearchScreen from './screens/SearchScreen'
import DataSetCreationScreen from './screens/DataSetCreationScreen'
import CatCard from './catCard/CatCard'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)
library.add(faFileUpload)

const locationData = {
  'Altes Katzenhaus': {
    'Raum 1': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 2': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 3': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 4': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 5': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 6': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    Außengehege: {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    Küche: { '-': '-' }
  },
  'Neues Katzenhaus': {
    'Raum 1': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 2': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 3': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 4': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 5': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 6': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 7': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    'Raum 8': {
      'Kennel 1': 'Kennel 1',
      'Kennel 2': 'Kennel 2',
      'Kennel 3': 'Kennel 3',
      'Kennel 4': 'Kennel 4',
      'Kennel 5': 'Kennel 5',
      'Kennel 6': 'Kennel 6'
    },
    Spielzimmer: { '-': '-' },
    Büro: { '-': '-' },
    Umkleide: { '-': '-' }
  }
}

export default class App extends Component {
  state = {
    dataSets: [],
    formValues: {},
    nameInput: '',
    idInput: '',
    transponderNrInput: '',
    adoptableCheckbox: false,
    houseInput: '',
    roomInput: '',
    kennelInput: '',
    inShelterSinceInput: '',
    raceInput: '',
    colorInput: '',
    dateOfBirthInput: '',
    sexInput: '',
    spayedOrNeuteredCheckbox: false,
    escapologistCheckbox: false,
    aggressiveCheckbox: false,
    assertiveCheckbox: false,
    nervousCheckbox: false,
    outdoorCatCheckbox: false,
    toiletTrainedCheckbox: false,
    acuteDiseasesInput: '',
    chronicDiseasesInput: '',
    medicationInput: '',
    nutritionInput: '',
    otherTreatmentsInput: '',
    freeTextInfoInput: ''
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const {
      formValues,
      houseInput,
      roomInput,
      kennelInput,
      inShelterSinceInput,
      adoptableCheckbox,
      spayedOrNeuteredCheckbox,
      dateOfBirthInput,
      escapologistCheckbox,
      aggressiveCheckbox,
      assertiveCheckbox,
      nervousCheckbox,
      outdoorCatCheckbox,
      toiletTrainedCheckbox
    } = this.state

    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => (
              <SearchScreen
                resetFormValues={this.resetFormValues}
                onChange={this.handleChange}
                onSubmit={this.preventDefault}
                formValues={formValues}
                displayValueSelectHouse={houseInput}
                displayValueSelectRoom={roomInput}
                displayValueSelectKennel={kennelInput}
                searchResults={this.renderSearchResults}
                locationOptions={locationData}
              />
            )}
          />
          <Route
            path="/dataSetCreation"
            render={() => (
              <DataSetCreationScreen
                formValues={formValues}
                resetFormValues={this.resetFormValues}
                onChange={this.handleChange}
                onCheck={this.handleCheck}
                onSubmit={this.createNewDataSet}
                preventDefault={this.preventDefault}
                locationOptions={locationData}
                displayValueCheckboxAdoptable={adoptableCheckbox}
                displayValueSelectHouse={houseInput}
                displayValueSelectRoom={roomInput}
                displayValueSelectKennel={kennelInput}
                displayValueInShelterSince={inShelterSinceInput}
                displayValueCheckboxSpayedOrNeutered={spayedOrNeuteredCheckbox}
                displayValueDateOfBirth={dateOfBirthInput}
                displayValueCheckboxEscapologist={escapologistCheckbox}
                displayValueCheckboxAggressive={aggressiveCheckbox}
                displayValueCheckboxAssertive={assertiveCheckbox}
                displayValueCheckboxNervous={nervousCheckbox}
                displayValueCheckboxOutdoorCat={outdoorCatCheckbox}
                displayValueCheckboxToiletTrained={toiletTrainedCheckbox}
              />
            )}
          />
          <nav>
            <NavLink exact to="/" data-cy="navHome">
              <FontAwesomeIcon icon="search" />
            </NavLink>
            <NavLink to="/dataSetCreation" data-cy="navCreate">
              <FontAwesomeIcon icon="file-upload" />
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  getData() {
    getCats()
      .then(cats => {
        this.setState({
          dataSets: cats
        })
      })
      .catch(err => console.error(err))
  }

  handleChange = event => {
    const input = [event.target.name + 'Input']
    const value = event.target.value

    this.setState({
      input: value
    })
  }

  handleCheck = event => {
    const checkBoxChecked = event.target.checked ? true : false

    this.setState({
      [event.target.name + 'Checkbox']: checkBoxChecked
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
      .filter(dataSet => dataSet.house.includes(houseInput))
      .filter(dataSet => dataSet.room.includes(roomInput))
      .filter(dataSet => dataSet.kennel.includes(kennelInput))
      .map(this.renderSingleDataSet)
  }

  renderSingleDataSet = dataSet => <CatCard key={dataSet.id} {...dataSet} />

  preventDefault = event => event.preventDefault()

  createNewDataSet = () => {
    const {
      nameInput,
      idInput,
      transponderNrInput,
      adoptableCheckbox,
      houseInput,
      roomInput,
      kennelInput,
      inShelterSinceInput,
      raceInput,
      colorInput,
      dateOfBirthInput,
      sexInput,
      spayedOrNeuteredCheckbox,
      escapologistCheckbox,
      aggressiveCheckbox,
      assertiveCheckbox,
      nervousCheckbox,
      outdoorCatCheckbox,
      toiletTrainedCheckbox,
      acuteDiseasesInput,
      chronicDiseasesInput,
      medicationInput,
      nutritionInput,
      otherTreatmentsInput,
      freeTextInfoInput
    } = this.state

    const newDataSet = {
      name: nameInput,
      id: idInput,
      transponderNr: transponderNrInput,
      adoptable: adoptableCheckbox,
      house: houseInput,
      room: roomInput,
      kennel: kennelInput,
      inShelterSince: new Date(inShelterSinceInput),
      race: raceInput,
      color: colorInput,
      sex: sexInput,
      spayedOrNeutered: spayedOrNeuteredCheckbox,
      dateOfBirth: new Date(dateOfBirthInput),
      escapologist: escapologistCheckbox,
      aggressive: aggressiveCheckbox,
      assertive: assertiveCheckbox,
      nervous: nervousCheckbox,
      outdoorCat: outdoorCatCheckbox,
      toiletTrained: toiletTrainedCheckbox,
      acuteDiseases: acuteDiseasesInput,
      chronicDiseases: chronicDiseasesInput,
      medication: medicationInput,
      nutrition: nutritionInput,
      otherTreatments: otherTreatmentsInput,
      freeTextInfo: freeTextInfoInput
    }

    postCat(newDataSet)
      .then(newDataSet => {
        this.setState({
          dataSets: [newDataSet, ...this.state.dataSets]
        })
      })
      .then(this.resetFormValues())
  }

  componentDidUpdate() {
    this.saveToLocalStorage()
  }

  componentWillUnmount() {
    this.saveToLocalStorage()
  }

  resetFormValues = () => {
    this.setState({
      nameInput: '',
      idInput: '',
      transponderNrInput: '',
      houseInput: '',
      roomInput: '',
      kennelInput: '',
      inShelterSinceInput: '',
      adoptableCheckbox: false,
      colorInput: '',
      raceInput: '',
      sexInput: '',
      dateOfBirthInput: '',
      spayedOrNeuteredCheckbox: false,
      escapologistCheckbox: false,
      aggressiveCheckbox: false,
      assertiveCheckbox: false,
      nervousCheckbox: false,
      outdoorCatCheckbox: false,
      toiletTrainedCheckbox: false
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
      return JSON.parse(localStorage.getItem('Katzenhaus-digital')) || []
    } catch (err) {
      console.log(err)
      return []
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
    border-top: 1px solid ${paleprimary};

    a:any-link {
      text-decoration: none;
      font-size: 32px;
      color: white;
      background: ${darkerprimary};
      border: 1px solid ${darkestprimary};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      width: 100%;
      &:first-child {
        border-right: 1px solid ${paleprimary};
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
