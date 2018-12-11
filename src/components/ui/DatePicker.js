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
  border: 1px inset ${darkerprimary};
  border-radius: 5px;
  height: 30px;
  width: 180px;
  margin: 0.3em 0;
  padding: 0 0.4em;
  font-size: 16px;
  display: block;
  box-shadow: inset 1px 1px 2px ${darkerprimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary}, inset 1px 1px 2px ${darkerprimary};
  }
`
