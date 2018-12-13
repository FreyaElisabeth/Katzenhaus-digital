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
    const { house, room, kennel } = this.props.formValues

    return (
      <FormWrapper data-cy="SearchForm" onSubmit={this.preventDefault}>
        <section className="search">
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="name"
            placeholder="Kitty"
            label="Name: "
            inputRef={this.nameInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="id"
            placeholder="123_F_18"
            label="HTV-Nummer: "
            inputRef={this.idInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="transponderNr"
            placeholder="...123"
            label="Transponder: "
            inputRef={this.transponderNrInputRef}
          />
        </section>
        <section className="search">
          <Select
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="house"
            options={locationOptions}
            label="Haus: "
            displayValue={house}
          />
          <ConditionalSelect
            name="room"
            label="Raum: "
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            displayValue={room}
            options={locationOptions}
            subset={house}
          />
          <ConditionalSelect
            name="kennel"
            label="Kennel: "
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            displayValue={kennel}
            options={locationOptions[house]}
            subset={room}
          />
        </section>
      </FormWrapper>
    )
  }

  preventDefault = event => event.preventDefault()
}
