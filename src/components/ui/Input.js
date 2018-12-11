import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

const StyledInput = styled.input`
  padding: 0 0.4em;
  border: 1px inset ${darkerprimary};
  border-radius: 5px;
  height: 30px;
  width: 240px;
  margin: 0.3em 0;
  font-size: 16px;
  display: block;
  box-shadow: inset 1px 1px 2px ${darkerprimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary}, inset 1px 1px 2px ${darkerprimary};
  }
`

export default class Input extends Component {
  static propTypes = {
    name: PropType.string.isRequired,
    placeholder: PropType.string,
    label: PropType.string.isRequired,
    onChange: PropType.func.isRequired,
    inputRef: PropType.object.isRequired
  }

  static defaultProps = {
    placeholder: '...'
  }

  render() {
    const {
      name,
      placeholder,
      label,
      required,
      onChange,
      inputRef
    } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledInput
          required={required && 'required'}
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    )
  }
}
