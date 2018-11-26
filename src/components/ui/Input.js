import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary } from '../colors'

const StyledInput = styled.input`
  margin: 0.5em 0 1em 0;
  font-size: 16px;
  padding: 1%;
  border: none;
  display: block;

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
    const { name, placeholder, label, onChange } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledInput
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    )
  }
}
