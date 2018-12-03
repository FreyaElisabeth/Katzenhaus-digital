import React, { Component } from 'react'

import ScreenWrapper from '../Wrappers/ScreenWrapper'
import DataSetCreationForm from './DataSetCreationForm'
import Header from './Header'

export default class DataSetCreationScreen extends Component {
  render() {
    const { searchResults, ...rest } = this.props

    return (
      <ScreenWrapper>
        <Header text="Datensatz anlegen" />
        <DataSetCreationForm {...rest} />
      </ScreenWrapper>
    )
  }
}
