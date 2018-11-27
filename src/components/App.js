import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import { palestprimary } from './colors'

import SearchForm from './SearchForm'
import CatCard from './catCard/CatCard'

export default class App extends Component {
  state = {
    dataSets: [
      {
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
      },
      {
        name: 'Sir Maunzelot',
        HTVNr: '849_A_17',
        transponderNr: 276097200023869,
        house: 'Neues Katzenhaus',
        room: 9,
        kennel: 7,
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
        HTVNr: '849_F_01',
        transponderNr: 276097200023855,
        house: 'Neues Katzenhaus',
        room: 6,
        kennel: 7,
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
    HTVNrInput: ''
  }

  render() {
    //const { nameInput } = this.state

    return (
      <Router>
        <Wrapper>
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <SearchForm
                  resetInput={this.resetInput}
                  onChange={this.handleChange}
                />
                {this.renderSearchResults()}
              </React.Fragment>
            )}
          />
        </Wrapper>
      </Router>
    )
  }

  resetInput = () => {
    this.setState({ nameInput: '' })
  }

  handleChange = event => {
    this.setState({
      [event.target.name + 'Input']: event.target.value
    })
  }

  onSearchSubmit = event => {
    event.preventDefault()
  }

  renderSearchResults = () => {
    const { dataSets, nameInput } = this.state

    return dataSets
      .filter(dataSet =>
        dataSet.name.toLowerCase().startsWith(nameInput.toLowerCase())
      )
      .map(this.renderSingleDataSet)
  }

  renderSingleDataSet = dataSet => <CatCard key={dataSet.HTVNr} {...dataSet} />
}

const Wrapper = styled.main`
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  background: ${palestprimary};
  min-height: 100vh;
  position: relative;
`
