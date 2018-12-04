import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

const StyledInput = styled.input`
  margin: 0.3em;
  font-size: 16px;
  border: 1px inset ${darkerprimary};
  padding: 1px 0.4em 1px 0.4em;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class Radio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  render() {
    const { name, label, value, onChange, inputRef } = this.props

    return (
      <label htmlFor={name}>
        <StyledInput
          type="radio"
          value={value}
          ref={inputRef}
          name={name}
          onChange={onChange}
        />
        {label}
      </label>
    )
  }
}
