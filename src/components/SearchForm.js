import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { darkestprimary } from './colors'
import Input from './ui/Input'

const StyledForm = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  padding: 20px;
`

export default class SearchForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    resetInput: PropTypes.func.isRequired
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
        <Input
          onChange={onChange}
          name="HTVNumber"
          placeholder="HTV_..."
          label="HTV-Nummer: "
        />
      </StyledForm>
    )
  }

  componentDidMount() {
    this.props.resetInput()
  }
}
