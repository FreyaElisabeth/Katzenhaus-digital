import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  div {
    display: grid;
    grid-gap: 5px;

    &.right {
      text-align: right;
    }
  }
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
        <h3>{name}</h3>
        <SectionWrapper data-cy="CardHead">
          <div className="left">
            <div>HTV-Nr.: {id}</div>
            <div>Transponder: {transponderNr}</div>
            <div>
              im Tierheim seit{' '}
              {new Date(inShelterSince).toLocaleDateString('de')}
            </div>
          </div>
          <div className="right">
            <div>{house}</div>
            <div>
              {room}
              {kennel && ', ' + kennel}
            </div>
            <div>
              {adoptable ? 'vermittelbar' : 'derzeit nicht vermittelbar'}
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
    )
  }
}
