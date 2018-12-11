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
  background: white;
  padding: 0 0.4em;
  border: 1px inset ${darkerprimary};
  box-shadow: inset 1px 1px 4px ${darkerprimary};
  border-radius: 5px;
  height: 30px;
  width: 180px;
  margin: 0.3em 0;
  font-size: 16px;
  display: block;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary}, inset 1px 1px 4px ${darkerprimary};
  }
`
