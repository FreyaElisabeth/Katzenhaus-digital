import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import CatCard from '../catCard/CatCard'

export default class CardsWrapper extends Component {
  static propTypes = {
    dataSets: PropType.array.isRequired,
    formValues: PropType.object.isRequired
  }

  render() {
    return <StyledWrapper>{this.renderSearchResults()}</StyledWrapper>
  }

  renderSearchResults = () => {
    const { dataSets } = this.props

    const {
      nameInput,
      idInput,
      transponderNrInput,
      houseInput,
      roomInput,
      kennelInput
    } = this.props.formValues

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
}

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
`
