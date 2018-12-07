import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

const StyledInput = styled.input`
  margin: 0.3em 0;
  font-size: 16px;
  display: block;
  border: 1px inset ${darkerprimary};
  border-radius: 3px;
  padding: 1px 0.4em 1px 0.4em;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
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
