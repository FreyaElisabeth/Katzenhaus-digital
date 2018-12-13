import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  div {
    display: grid;
    grid-gap: 10px;
    padding: 0 5px;

    &:nth-child(odd) {
      padding: 5px;
    }

    &.right {
      text-align: right;
    }
  }
`

const StyledH3 = styled.h3`
  padding-left: 5px;
`

export default class CardHead extends Component {
  static propTypes = {
    adoptable: PropType.bool.isRequired,
    house: PropType.string.isRequired,
    id: PropType.string.isRequired,
    inShelterSince: PropType.string.isRequired,
    kennel: PropType.string,
    name: PropType.string.isRequired,
    room: PropType.string.isRequired,
    transponderNr: PropType.string
  }

  render() {
    const {
      adoptable,
      house,
      id,
      inShelterSince,
      kennel,
      name,
      room,
      transponderNr
    } = this.props

    return (
      <React.Fragment>
        <StyledH3>{name}</StyledH3>
        <SectionWrapper data-cy="CardHead">
          <div className="left">
            <span>HTV-Nr.: {id}</span>
            <span>Transponder: {transponderNr}</span>
            <span>
              im Tierheim seit{' '}
              {new Date(inShelterSince).toLocaleDateString('de')}
            </span>
          </div>
          <div className="right">
            <span>{house}</span>
            <span>
              {room}
              {kennel && ', ' + kennel}
            </span>
            <span>
              {adoptable ? 'vermittelbar' : 'derzeit nicht vermittelbar'}
            </span>
          </div>
        </SectionWrapper>
      </React.Fragment>
    )
  }
}
