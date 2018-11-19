import React, { Component } from 'react'
import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin: 20px 0;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export default class CardHead extends Component {
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
      <SectionWrapper>
        <h3>{name}</h3>
        <div>
          <span>
            im Tierheim seit {inShelterSince.toLocaleDateString('de')}
          </span>
          <span>HTV-Nr.: {HTVNr}</span>
        </div>
        <div>
          <span>
            {adoptable ? 'vermittelbar' : 'derzeit nicht vermittelbar'}
          </span>
          <span>Transponder: {transponderNr}</span>
        </div>
        <div>
          <span />
          <span>
            {house}, Raum {room}, Kennel {kennel}
          </span>
        </div>
      </SectionWrapper>
    )
  }
}
