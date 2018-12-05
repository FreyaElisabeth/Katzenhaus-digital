import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary, darkerprimary, darkestprimary } from '../colors'

export default class Radio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  render() {
    const { name, label, value, onChange, inputRef } = this.props

    return (
      <StyledLabel htmlFor={name}>
        <input
          type="radio"
          value={value}
          ref={inputRef}
          name={name}
          onChange={onChange}
        />
        {label}
      </StyledLabel>
    )
  }
}

const StyledLabel = styled.label`
  input {
    margin: 0.3em 0.5em 1em 1px;
    font-size: 16px;
    display: inline-block;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      width: 16px;
      height: 16px;
      border: 1px inset ${darkerprimary};
      border-radius: 50%;
      background: white;
    }

    &:after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      transition: all 0.2s;
      width: 0;
      height: 0;
      border-radius: 50%;
      opacity: 0;
      transition: all ease-out 0.1s;
    }

    &:checked {
      &:after {
        opacity: 1;
        background: ${darkestprimary};
        width: 10px;
        height: 10px;
      }
    }

    &:focus {
      &:before {
        outline: none;
        box-shadow: 0 0 2px 2px ${palesecondary};
      }
    }
  }
`

const StyledInput = styled.input`
  margin: 0.3em;
  font-size: 16px;
  border: 1px inset ${darkerprimary};
  padding: 1px 0.4em 1px 0.4em;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${palesecondary};
  }
`
