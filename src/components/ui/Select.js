import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

export default class Select extends Component {
  static propTypes = {
    name: PropType.string.isRequired,
    label: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    options: PropType.object.isRequired,
    displayValue: PropType.string.isRequired
  }

  render() {
    const {
      name,
      label,
      onChange,
      options,
      required,
      displayValue
    } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledSelect
          name={name}
          onChange={onChange}
          value={displayValue}
          required={required && 'required'}
        >
          <option value="">Bitte wählen</option>
          {this.renderOptions(options)}
        </StyledSelect>
      </label>
    )
  }

  renderOptions(options) {
    return Object.keys(options).map(this.renderSingleOption)
  }

  renderSingleOption(text) {
    return (
      <option value={text} key={text}>
        {text}
      </option>
    )
  }
}

const StyledSelect = styled.select`
  margin: 0.3em 0 1em 0;
  font-size: 16px;
  display: block;
  border: 1px inset ${darkerprimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`
