import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

const StyledInput = styled.input`
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
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder: 'Type here'
  }

  render() {
    const { name, placeholder, label, onChange, inputRef } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledInput
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    )
  }
}
