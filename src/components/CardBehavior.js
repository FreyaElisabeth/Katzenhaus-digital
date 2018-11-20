import React, { Component } from 'react'
import styled from 'styled-components'
import { darkerprimary } from './colors'

const SectionWrapper = styled.section`
  margin: 10px 0;

  div.false {
    color: ${darkerprimary};
    text-decoration: line-through;
  }
`

export default class CardHead extends Component {
  render() {
    const {
      aggressive,
      assertive,
      escapologist,
      nervous,
      outdoorCat,
      toiletTrained
    } = this.props

    return (
      <SectionWrapper>
        <div className={escapologist ? '' : 'false'}>Fluchtneigung</div>
        <div className={aggressive ? '' : 'false'}>aggressiv</div>
        <div className={nervous ? '' : 'false'}>ängstlich</div>
        <div className={assertive ? '' : 'false'}>selbstbewusst</div>
        <div className={toiletTrained ? '' : 'false'}>stubenrein</div>
        <div className={outdoorCat ? '' : 'false'}>Freigänger</div>
      </SectionWrapper>
    )
  }
}
