import React, { Component } from 'react'

import ScreenWrapper from '../Wrappers/ScreenWrapper'
import SearchFormContainer from '../ui/SearchFormContainer'
import CardsWrapperContainer from '../Wrappers/CardsWrapperContainer'
import Header from '../ui/Header'

export default class SearchScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <Header text="Suche" />
        <SearchFormContainer />
        <CardsWrapperContainer />
      </ScreenWrapper>
    )
  }
}
