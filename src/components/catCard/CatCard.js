import React, { Component } from 'react'
import styled from 'styled-components'

import { white, darkestprimary } from '../colors'
import CardHead from './CardHead'
import CardDescription from './CardDescription'
import CardBehavior from './CardBehavior'
import CardMedCond from './CardMedCond'
import CardFreeText from './CardFreeText'
import Separator from '../ui/Separator'

const CardWrapper = styled.div`
  background: ${white};
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 30px;
`

export default class CatCard extends Component {
  render() {
    const { ...data } = this.props

    return (
      <CardWrapper data-cy="CatCard">
        <CardHead {...data} />
        <Separator text="Beschreibung" />
        <CardDescription {...data} />
        <Separator text="Verhalten" />
        <CardBehavior {...data} />
        <Separator text="Gesundheitszustand" />
        <CardMedCond {...data} />
        <Separator text="Sonstiges" />
        <CardFreeText {...data} />
      </CardWrapper>
    )
  }
}
