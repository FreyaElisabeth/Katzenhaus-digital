import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { configureStore } from 'redux-starter-kit'
import { Provider } from 'react-redux'

import reducer from '../duck/reducer'
import * as Actions from '../duck/actions'
import SearchScreen from './screens/SearchScreen'
import DataSetCreationScreen from './screens/DataSetCreationScreen'

import {
  paleprimary,
  palestprimary,
  brightprimary,
  darkerprimary,
  darkestprimary
} from './colors'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faFileUpload)

const store = configureStore({ reducer })

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
    this.getCats()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrapper>
            <Route path="/" exact component={SearchScreen} />
            <Route path="/dataSetCreation" component={DataSetCreationScreen} />
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

  getCats() {
    console.log('getCats')
    store.dispatch(Actions.fetchCats())
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
