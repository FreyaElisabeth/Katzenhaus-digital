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

  /* handleChange = event => {
    const input = event.target.name + 'Input'
    const value = event.target.value

    store.dispatch(Actions.handleChange({ input, value }))
  }

  handleCheck = event => {
    const input = event.target.name + 'Checkbox'
    const value = event.target.checked ? true : false

    store.dispatch(Actions.handleChange({ input, value }))
  } */

  preventDefault = event => event.preventDefault()

  createNewDataSet = () => {
    const {
      name,
      id,
      transponderNr,
      adoptable,
      house,
      room,
      kennel,
      inShelterSince,
      race,
      color,
      dateOfBirth,
      sex,
      spayedOrNeutered,
      escapologist,
      aggressive,
      assertive,
      nervous,
      outdoorCat,
      toiletTrained,
      acuteDiseases,
      chronicDiseases,
      medication,
      nutrition,
      otherTreatments,
      freeTextInfo
    } = this.state.formValues

    const newDataSet = {
      name: name,
      id: id,
      transponderNr: transponderNr,
      adoptable: adoptable,
      house: house,
      room: room,
      kennel: kennel,
      inShelterSince: new Date(inShelterSince),
      race: race,
      color: color,
      sex: sex,
      spayedOrNeutered: spayedOrNeutered,
      dateOfBirth: new Date(dateOfBirth),
      escapologist: escapologist,
      aggressive: aggressive,
      assertive: assertive,
      nervous: nervous,
      outdoorCat: outdoorCat,
      toiletTrained: toiletTrained,
      acuteDiseases: acuteDiseases,
      chronicDiseases: chronicDiseases,
      medication: medication,
      nutrition: nutrition,
      otherTreatments: otherTreatments,
      freeTextInfo: freeTextInfo
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
