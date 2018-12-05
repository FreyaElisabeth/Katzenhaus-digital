import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { darkerprimary, palesecondary } from '../colors'

export default class TextArea extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder: '...'
  }

  render() {
    const { name, placeholder, label, onChange, textAreaRef } = this.props

    return (
      <label htmlFor={name}>
        {label}
        <StyledTextArea
          ref={textAreaRef}
          name={name}
          rows="10"
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    )
  }
}

const StyledTextArea = styled.textarea`
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
