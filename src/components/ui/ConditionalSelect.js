import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { darkerprimary, palesecondary } from '../colors'

export default class ConditionalSelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object,
    displayValue: PropTypes.string.isRequired,
    subset: PropTypes.string
  }

  render() {
    const {
      displayValue,
      label,
      name,
      onChange,
      options,
      required,
      subset
    } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledSelect
          onChange={onChange}
          name={name}
          required={required && 'required'}
          value={displayValue}
        >
          <option value="">Bitte wählen</option>
          {subset && this.renderOptions(options[subset])}
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
