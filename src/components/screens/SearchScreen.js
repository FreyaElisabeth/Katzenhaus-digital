import React, { Component } from 'react'

import ScreenWrapper from '../Wrappers/ScreenWrapper'
import SearchForm from '../ui/SearchForm'
import CardsWrapper from '../Wrappers/CardsWrapper'
import Header from '../ui/Header'

export default class SearchScreen extends Component {
  render() {
    const { searchResults, ...rest } = this.props

    return (
      <ScreenWrapper>
        <Header text="Suche" />
        <SearchForm {...rest} />
        <CardsWrapper searchResults={searchResults} />
      </ScreenWrapper>
    )
  }
}
