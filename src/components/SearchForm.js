import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { darkestprimary } from './colors'
import Input from './ui/Input'
import Select from './ui/Select'

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
    const { onChange, onSubmit } = this.props

    return (
      <StyledForm data-cy="SearchForm" onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          placeholder="Kitty"
          label="Name: "
        />
        <Input
          onChange={onChange}
          name="HTVNr"
          placeholder="123_F_18"
          label="HTV-Nummer: "
        />
        <Input
          onChange={onChange}
          name="transponderNr"
          placeholder="...123"
          label="Transponder: "
        />
        <Select
          onChange={onChange}
          name="house"
          options={['Neues Katzenhaus', 'Altes Katzenhaus', 'Außengehege']}
          label="Haus: "
        />
      </StyledForm>
    )
  }

  componentDidMount() {
    this.props.resetInput()
  }
}
