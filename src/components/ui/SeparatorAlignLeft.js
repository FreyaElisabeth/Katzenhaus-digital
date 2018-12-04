import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { darkestprimary } from '../colors'

export default class SeparatorAlignLeft extends Component {
  static propTypes = {
    text: PropType.string.isRequired
  }

  render() {
    return (
      <Wrapper data-cy="SeparatorAlignLeft">
        <Text>{this.props.text}</Text>
        <Line />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0 0 0.75em 0;
  border-bottom: 1px solid ${darkestprimary};
`

const Text = styled.span`
  color: ${darkestprimary};
  white-space: nowrap;
  margin: 0 0.5em 0.75em 0;
`
