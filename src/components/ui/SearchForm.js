import React, { Component } from 'react'
import PropType from 'prop-types'

import Input from './Input'
import Select from './Select'
import FormWrapper from '../Wrappers/FormWrapper'
import ConditionalSelect from './ConditionalSelect'

export default class SearchForm extends Component {
  static propTypes = {
    onChange: PropType.func.isRequired,
    resetFormValues: PropType.func.isRequired,
    onSubmit: PropType.func.isRequired,
    displayValueSelectHouse: PropType.string.isRequired,
    displayValueSelectRoom: PropType.oneOfType([
      PropType.string,
      PropType.number
    ]).isRequired,
    displayValueSelectKennel: PropType.oneOfType([
      PropType.string,
      PropType.number
    ]).isRequired,
    locationOptions: PropType.object.isRequired
  }

  constructor(props) {
    super(props)
    this.nameInputRef = React.createRef()
    this.idInputRef = React.createRef()
    this.transponderNrInputRef = React.createRef()
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
        <section className="search">
          <Input
            onChange={onChange}
            name="name"
            placeholder="Kitty"
            label="Name: "
            inputRef={this.nameInputRef}
          />
          <Input
            onChange={onChange}
            name="id"
            placeholder="123_F_18"
            label="HTV-Nummer: "
            inputRef={this.idInputRef}
          />
          <Input
            onChange={onChange}
            name="transponderNr"
            placeholder="...123"
            label="Transponder: "
            inputRef={this.transponderNrInputRef}
          />
        </section>
        <section className="search">
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
    this.props.resetFormValues()
  }
}
