import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'
import { darkerprimary } from '../colors'

const SectionWrapper = styled.section`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 240px auto;
  grid-gap: 5px;

  div {
    display: grid;
    grid-gap: 10px;
    border-radius: 5px;
    padding: 5px;

    &.false {
      color: ${darkerprimary};
      text-decoration: line-through;
    }

    span {
      display: flex;
      align-items: flex-start;
      word-break: break-all;

      &:nth-child(even) {
        align-items: flex-end;
      }
    }
  }
`

export default class CardHead extends Component {
  static propTypes = {
    aggressive: PropType.bool,
    assertive: PropType.bool,
    escapologist: PropType.bool,
    nervous: PropType.bool,
    outdoorDat: PropType.bool,
    toiletTrained: PropType.bool
  }

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
      <SectionWrapper data-cy="CardBehavior">
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
