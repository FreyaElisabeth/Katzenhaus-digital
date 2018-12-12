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
    formValues: PropType.object.isRequired,
    locationOptions: PropType.object.isRequired
  }

  constructor(props) {
    super(props)
    this.nameInputRef = React.createRef()
    this.idInputRef = React.createRef()
    this.transponderNrInputRef = React.createRef()
  }

  componentDidMount() {
    this.props.resetFormValues()
  }

  render() {
    const { onChange, locationOptions } = this.props
    const { houseInput, roomInput, kennelInput } = this.props.formValues

    return (
      <FormWrapper data-cy="SearchForm" onSubmit={this.preventDefault}>
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
            displayValue={houseInput}
          />
          <ConditionalSelect
            name="room"
            label="Raum: "
            onChange={onChange}
            displayValue={roomInput}
            options={locationOptions}
            subset={houseInput}
          />
          <ConditionalSelect
            name="kennel"
            label="Kennel: "
            onChange={onChange}
            displayValue={kennelInput}
            options={locationOptions[houseInput]}
            subset={roomInput}
          />
        </section>
      </FormWrapper>
    )
  }

  preventDefault = event => event.preventDefault()
}
