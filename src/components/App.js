import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { configureStore } from 'redux-starter-kit'
import reducer from '../duck/reducer'
import * as Actions from '../duck/actions'
import { Provider } from 'react-redux'

import { getCats, postCat } from '../services/cats'
import {
  paleprimary,
  palestprimary,
  brightprimary,
  darkerprimary,
  darkestprimary
} from './colors'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import SearchScreen from './screens/SearchScreen'
import DataSetCreationScreen from './screens/DataSetCreationScreen'

library.add(faSearch)
library.add(faFileUpload)

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    this.getData()
  }

  render() {
    const state = store.getState()
    const { formValues, locationData } = state

    return (
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Route path="/" exact component={SearchScreen} />
            <Route
              path="/dataSetCreation"
              render={() => (
                <DataSetCreationScreen
                  formValues={formValues}
                  resetFormValues={() => this.resetFormValues(state)}
                  onChange={this.handleChange}
                  onCheck={this.handleCheck}
                  onSubmit={this.createNewDataSet}
                  preventDefault={this.preventDefault}
                  locationOptions={locationData}
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
      </Provider>
    )
  }

  getData() {
    getCats()
      .then(cats => {
        store.dispatch(Actions.replaceCats(cats))
      })
      .catch(err => console.error(err))
  }

  handleChange = event => {
    const input = event.target.name + 'Input'
    const value = event.target.value

    store.dispatch(Actions.handleChange({ input, value }))
  }

  handleCheck = event => {
    const input = event.target.name + 'Checkbox'
    const value = event.target.checked ? true : false

    store.dispatch(Actions.handleChange({ input, value }))
  }

  /* renderSearchResults = state => {
    const { dataSets } = state

    const {
      nameInput,
      idInput,
      transponderNrInput,
      houseInput,
      roomInput,
      kennelInput
    } = state.formValues

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
 */
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
    } = this.state.formValues

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
        store.dispatch(Actions.createNewDataSet(newDataSet))
      })
      .then(this.resetFormValues())
  }

  componentDidUpdate() {
    //this.saveToLocalStorage()
  }

  componentWillUnmount() {
    //this.saveToLocalStorage()
  }

  resetFormValues = () => {
    store.dispatch(Actions.resetFormValues())
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
