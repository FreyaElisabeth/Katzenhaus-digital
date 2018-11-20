import React, { Component } from 'react'
import styled from 'styled-components'

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
        <SectionWrapper>
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
