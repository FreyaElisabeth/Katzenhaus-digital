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
      name,
      id,
      transponderNr,
      house,
      room,
      kennel
    } = this.props.formValues

    return dataSets
      .filter(dataSet =>
        dataSet.name.toLowerCase().includes(name.toLowerCase())
      )
      .filter(dataSet => dataSet.id.toLowerCase().includes(id.toLowerCase()))
      .filter(dataSet =>
        dataSet.transponderNr.toString().includes(transponderNr)
      )
      .filter(dataSet => dataSet.house.includes(house))
      .filter(dataSet => dataSet.room.includes(room))
      .filter(dataSet => dataSet.kennel.includes(kennel))
      .map(this.renderSingleDataSet)
  }

  renderSingleDataSet = dataSet => <CatCard key={dataSet.id} {...dataSet} />
}

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  padding-bottom: 20px;
`
