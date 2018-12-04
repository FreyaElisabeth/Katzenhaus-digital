import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Select from './Select'
import SeparatorAlignLeft from './SeparatorAlignLeft'
import FormWrapper from '../Wrappers/FormWrapper'
import ConditionalSelect from './ConditionalSelect'

export default class SearchForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    resetInputValues: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    displayValueSelectHouse: PropTypes.string.isRequired,
    displayValueSelectRoom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    displayValueSelectKennel: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }

  render() {
    const {
      onChange,
      onSubmit,
      displayValueSelectHouse,
      displayValueSelectRoom,
      displayValueSelectKennel,
      locationOptions
    } = this.props

    return (
      <FormWrapper data-cy="SearchForm" onSubmit={onSubmit}>
        <section>
          <SeparatorAlignLeft text="Kopfdaten" />
          <Input
            onChange={onChange}
            name="name"
            placeholder="Kitty"
            label="Name: "
          />
          <Input
            onChange={onChange}
            name="id"
            placeholder="123_F_18"
            label="HTV-Nummer: "
          />
          <Input
            onChange={onChange}
            name="transponderNr"
            placeholder="...123"
            label="Transponder: "
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Unterbringung" />
          <Select
            onChange={onChange}
            name="house"
            options={locationOptions}
            label="Haus: "
            displayValue={displayValueSelectHouse}
          />
          <ConditionalSelect
            name="room"
            label="Raum: "
            onChange={onChange}
            displayValue={displayValueSelectRoom}
            options={locationOptions}
            subset={displayValueSelectHouse}
          />
          <ConditionalSelect
            name="kennel"
            label="Kennel: "
            onChange={onChange}
            displayValue={displayValueSelectKennel}
            options={locationOptions[displayValueSelectHouse]}
            subset={displayValueSelectRoom}
          />
        </section>
      </FormWrapper>
    )
  }

  componentDidMount() {
    this.props.resetInputValues()
  }
}
