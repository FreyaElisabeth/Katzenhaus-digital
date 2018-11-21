import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { darkestprimary } from './colors'
import Input from './Input'
import Button from './Button'

const SearchWrapper = styled.div`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;

  form {
    display: grid;
    grid-gap: 5px;
    align-items: start;
    justify-content: start;
  }
`

export default class SearchScreen extends Component {
  render() {
    return (
      <SearchWrapper>
        <form>
          <Input name="name" placeholder="Kitty" label="Name: " />
          <Link to="/searchResults">
            <Button text="Suchen" onClick={this.props.OnSearchSubmit} />
          </Link>
        </form>
      </SearchWrapper>
    )
  }
}
