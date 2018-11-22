import React, { Component } from 'react'
import styled from 'styled-components'
import { palesecondary } from './colors'

const InputField = styled.input`
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
  render() {
    const { name, placeholder, label, onChange } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <InputField name={name} placeholder={placeholder} onChange={onChange} />
      </label>
    )
  }
}
