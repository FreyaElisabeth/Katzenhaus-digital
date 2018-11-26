import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { darkestprimary } from './colors'
import Input from './ui/Input'
import Button from './ui/Button'

const StyledForm = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;
`

export default class SearchForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    /*  onSearchSubmit: PropTypes.func.isRequired,
    submitPermitted: PropTypes.bool, */
    setInputToNull: PropTypes.func.isRequired
  }

  render() {
    const { onChange } = this.props

    return (
      <StyledForm data-cy="SearchForm">
        <Input
          onChange={onChange}
          name="name"
          placeholder="Kitty"
          label="Name: "
        />
      </StyledForm>
    )
  }

  componentDidMount() {
    this.props.setInputToNull()
  }
}
