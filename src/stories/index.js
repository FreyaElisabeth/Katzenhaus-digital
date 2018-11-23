import React from 'react'
import { Router, Route } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number, date } from '@storybook/addon-knobs'

import CardHead from '../components/catCard/CardHead'
import CardDescription from '../components/catCard/CardDescription'
import CardBehavior from '../components/catCard/CardBehavior'
import CardMedCond from '../components/catCard/CardMedCond'
import CardFreeText from '../components/catCard/CardFreeText'
import Separator from '../components/catCard/Separator'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

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

storiesOf('CardDescription', module).add('CardDescription', () => (
  <CardDescription
    race={text('Race:', 'European Shorthair')}
    color={text('Color:', 'brown tabby')}
    sex={text('Sex:', 'weiblich')}
    spayedOrNeutered={boolean('spayed/neutered', false)}
    dateOfBirth={dateKnob('Date of birth:', new Date('2015.03.15'))}
  />
))

storiesOf('CardBehavior', module).add('CardBehavior', () => (
  <CardBehavior
    escapologist={boolean('escapologist', true)}
    aggressive={boolean('aggressive', false)}
    assertive={boolean('assertive', true)}
    toiletTrained={boolean('toiletTrained', true)}
    nervous={boolean('nervous', false)}
  />
))

storiesOf('CardMedCond', module).add('CardMedCond', () => (
  <CardMedCond
    acuteDiseases={text('Acute diseases:', 'sneezing')}
    chronicDiseases={text('Chronic diseases:', 'overweight')}
    medication={text('Medication:', 'Lysimun 1ml 2x/day')}
    nutrition={text('Nutrition:', 'Kibble only')}
    otherTreatments={text('Other treatmens:', 'frequent snuggles')}
  />
))

storiesOf('CardFreeText', module).add('CardFreeText', () => (
  <CardFreeText
    freeTextInfo={text('Free text info:', 'Sir Mau is a very playful catster.')}
  />
))

storiesOf('Input', module).add('Input', () => (
  <Input
    placeholder={text('Your placeholder here:', 'Sir Maunzelot')}
    name="input-storybook"
    label={text('Your label here:', 'Name: ')}
  />
))

storiesOf('Button', module).add('Button', () => (
  <Button text={text('Text', 'Submit')} onClick={action('clicked')} />
))

storiesOf('Separator', module).add('several states', () => (
  <React.Fragment>
    <Separator text={text('Your text here:', 'this is a separator')} />
    <Separator text="separator" />
  </React.Fragment>
))
