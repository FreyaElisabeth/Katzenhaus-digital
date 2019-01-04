import React, { Component } from 'react'

import ScreenWrapper from '../Wrappers/ScreenWrapper'
import DataSetCreationFormContainer from '../ui/DataSetCreationFormContainer'
import Header from '../ui/Header'

export default class DataSetCreationScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <Header text="Datensatz anlegen" />
        <DataSetCreationFormContainer />
      </ScreenWrapper>
    )
  }
}
