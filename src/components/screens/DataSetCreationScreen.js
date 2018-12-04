import React, { Component } from 'react'

import ScreenWrapper from '../Wrappers/ScreenWrapper'
import DataSetCreationForm from '../ui/DataSetCreationForm'
import Header from '../ui/Header'

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
