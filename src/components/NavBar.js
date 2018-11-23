import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { brightprimary } from './colors'

export default class NavBar extends Component {
  static PropTypes = {
    linkTo: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired
  }

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
