import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import Input from '../components/Input'
import CatCard from '../components/CatCard'
import Separator from '../components/Separator'

storiesOf('CatCard', module).add('CatCard', () => <CatCard />)

storiesOf('Input', module).add('Input', () => (
  <Input
    onSubmit={action('addInputToArray')}
    placeholder={text('Your placeholder here:', 'Sir Maunzelot')}
    name="input-storybook"
    label={text('Your label here:', 'Name: ')}
  />
))

storiesOf('Separator', module).add('several states', () => (
  <React.Fragment>
    <Separator text={text('Your text here:', 'this is a separator')} />
    <Separator text="separator" />
  </React.Fragment>
))
