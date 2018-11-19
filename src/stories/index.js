import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number, date } from '@storybook/addon-knobs'

import Input from '../components/Input'
import CardHead from '../components/CardHead'
import Separator from '../components/Separator'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('CardHead', module).add('CardHead', () => (
  <CardHead
    name={text('Name:', 'Sir Maunzelot')}
    HTVNr={text('HTV number:', '848_A_17')}
    transponderNr={number('Transponder:', 276097200023868)}
    inShelterSince={dateKnob('In the Shelter since:', new Date('2018.12.25'))}
    house={text('House:', 'Neues Katzenhaus')}
    room={number('Room nr.:', '6')}
    kennel={number('Kennel nr.:', '7')}
    adoptable={boolean('adoptable', true)}
  />
))

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
