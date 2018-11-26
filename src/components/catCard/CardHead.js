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
    HTVNr: PropType.string.isRequired,
    inShelterSince: PropType.instanceOf(Date).isRequired,
    kennel: PropType.number,
    name: PropType.string.isRequired,
    room: PropType.oneOfType([PropType.string, PropType.number]),
    transponderNr: PropType.number
  }

  render() {
    const {
      adoptable,
      house,
      HTVNr,
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
            <div>{house}</div>
            <div>
              Raum {room}, Kennel {kennel}
            </div>
            <div>
              {adoptable ? 'vermittelbar' : 'derzeit nicht vermittelbar'}
            </div>
          </div>
          <div className="right">
            <div>HTV-Nr.: {HTVNr}</div>
            <div>Transponder: {transponderNr}</div>
            <div>
              im Tierheim seit {inShelterSince.toLocaleDateString('de')}
            </div>
          </div>
        </SectionWrapper>
      </React.Fragment>
    )
  }
}
