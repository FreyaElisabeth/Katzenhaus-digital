import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palesecondary, darkerprimary } from '../colors'

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired
  }

  render() {
    const { name, label, onCheck, inputRef, displayValue } = this.props

    return (
      <StyledLabel htmlFor={name}>
        <input
          type="checkbox"
          ref={inputRef}
          name={name}
          onChange={onCheck}
          checked={displayValue}
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
      top: -2px;
      width: 16px;
      height: 16px;
      border: 1px inset ${darkerprimary};
      background: white;
      border-radius: 3px;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 6px;
      right: 6px;
      transition: all 0.2s;
      width: 4px;
      height: 0;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      border-radius: 2px;
      transform-origin: bottom left;
      transform: rotate(40deg);
      opacity: 0;
      transition: all ease-out 0.1s;
    }

    &:checked {
      &:after {
        opacity: 1;
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
