import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

export default class DatePicker extends Component {
  static propTypes = {
    name: PropType.string.isRequired,
    label: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    displayValue: PropType.string.isRequired
  }

  render() {
    const { name, label, onChange, displayValue } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledInput
          value={displayValue}
          type="date"
          name={name}
          onChange={onChange}
        />
      </label>
    )
  }
}

const StyledInput = styled.input`
  margin: 0.3em 0;
  font-size: 16px;
  display: block;
  border: 1px inset ${darkerprimary};
  border-radius: 3px;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`
