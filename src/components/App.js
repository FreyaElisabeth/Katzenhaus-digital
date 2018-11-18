import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
  palestprimary,
  paleprimary,
  brightprimary,
  darkerprimary,
  darkestprimary,
  palestsecondary,
  palesecondary,
  brightsecondary,
  darkersecondary,
  darkestsecondary
} from './colors'

import CatCard from './CatCard'

const Wrapper = styled.main`
  margin: 10px;
  background: ${palestprimary};

  nav {
    display: flex;
    background: ${brightprimary};

    a:any-link {
      color: ${palestsecondary};
    }

    a:active {
      background: ${darkerprimary};
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route path="/" exact render={() => <CatCard />} />
          <nav>
            <NavLink exact to="/">
              CatCard
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }

  toggleShowDoneTodos = () => {
    this.setState({ showDoneTodos: !this.state.showDoneTodos })
  }
}
