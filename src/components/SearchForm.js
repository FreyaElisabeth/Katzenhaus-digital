import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { darkestprimary } from './colors'
import Input from './Input'
import Button from './Button'

const FormWrapper = styled.div`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;

  form a:any-link {
    text-decoration: none;
    color: white;
  }
`

export default class SearchForm extends Component {
  render() {
    return (
      <FormWrapper>
        <form>
          <Input
            onChange={this.props.onChange}
            name="name"
            placeholder="Kitty"
            label="Name: "
          />
          <Button
            text="Suchen"
            onClick={this.props.OnSearchSubmit}
            linkTo={this.props.submitPermitted ? '/searchResults' : '/search'}
          />
        </form>
      </FormWrapper>
    )
  }

  componentDidMount() {
    this.props.setInputToNull()
  }
}
