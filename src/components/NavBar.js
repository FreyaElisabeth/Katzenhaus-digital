import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { brightprimary } from './colors'

export default class NavBar extends Component {
  render() {
    const { linkTo, icon, altTag } = this.props

    return (
      <StyledNav>
        <NavLink to={linkTo}>
          <img src={icon} alt={altTag} />
        </NavLink>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  background: ${brightprimary};
  height: 100px;
  width: 100vh;
  position: absolute;
`
