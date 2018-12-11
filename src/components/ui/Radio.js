import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { palesecondary, darkerprimary, darkestprimary } from '../colors'

export default class Radio extends Component {
  static propTypes = {
    name: PropType.string.isRequired,
    label: PropType.string.isRequired,
    value: PropType.string.isRequired,
    onChange: PropType.func.isRequired
  }

  render() {
    const { name, label, value, onChange } = this.props

    return (
      <StyledLabel htmlFor={name}>
        <input type="radio" value={value} name={name} onChange={onChange} />
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
      box-shadow: inset 1px 1px 2px ${darkerprimary};
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
        box-shadow: 0 0 2px 2px ${palesecondary},
          inset 1px 1px 2px ${darkerprimary};
      }
    }
  }
`
