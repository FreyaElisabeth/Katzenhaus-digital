import React, { Component } from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

import { darkestprimary } from '../colors'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  width: 100%;
  margin: 0.75em 0;
  border-bottom: 1px solid ${darkestprimary};

  &.left {
    margin-left: 5%;
  }

  &.right {
    margin-right: 5%;
  }
`

const Text = styled.span`
  color: ${darkestprimary};
  white-space: nowrap;
  margin: 0.75em 1em;
`

export default class Separator extends Component {
  static propTypes = {
    text: PropType.string.isRequired
  }

  render() {
    return (
      <Wrapper data-cy="Separator">
        <Line className="left" />
        <Text>{this.props.text}</Text>
        <Line className="right" />
      </Wrapper>
    )
  }
}
