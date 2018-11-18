import React, { Component } from 'react'
import styled from 'styled-components'
import { darkestprimary, palesecondary } from './colors'

const InputField = styled.input`
  margin: 0.5em 0 1em 0;
  font-size: 22px;
  caret-color: ${darkestprimary};
  color: ${darkestprimary};
  width: 80%;
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`

export default class Input extends Component {
  render() {
    const { name, placeholder, label } = this.props
    return (
      <label htmlFor={name}>
        {label}
        <InputField
          name={name}
          placeholder={placeholder}
          onKeyUp={event =>
            event.key === 'Enter' ? this.handleSubmit(event) : ''
          }
        />
      </label>
    )
  }

  handleSubmit(event) {
    if (event.key === 'Enter') {
      this.props.onSubmit(event)
      event.target.value = ''
    }
  }
}
