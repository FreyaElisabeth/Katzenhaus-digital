import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import uid from 'uid'

import { palesecondary, darkerprimary } from '../colors'

const StyledSelect = styled.select`
  margin: 0.3em 0 1em 0;
  font-size: 16px;
  display: block;
  border-width: 1px;
  border-style: inset;
  border-color: ${darkerprimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class Input extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderOptions(options) {
    return options.map(this.renderSingleOption)
  }

  renderSingleOption(option) {
    return (
      <option key={uid()} value={option.toLowerCase()}>
        {option}
      </option>
    )
  }

  render() {
    const { name, label, onChange, options } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledSelect name={name} onChange={onChange}>
          <option value="">Haus auswählen</option>
          {this.renderOptions(options)}
        </StyledSelect>
      </label>
    )
  }
}
