import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Select from './Select'
import ConditionalSelect from './ConditionalSelect'
import Button from './Button'
import Checkbox from './Checkbox'
import FormWrapper from '../Wrappers/FormWrapper'

export default class DataSetCreationForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    preventDefault: PropTypes.func.isRequired,
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

  constructor(props) {
    super(props)
    this.nameInputRef = React.createRef()
    this.idInputRef = React.createRef()
    this.transponderNrInputRef = React.createRef()
    this.adoptableCheckboxRef = React.createRef()
  }

  componentDidMount() {
    this.props.resetInputValues()
  }

  render() {
    const {
      onChange,
      onCheck,
      preventDefault,
      displayValueCheckboxAdoptable,
      displayValueSelectHouse,
      displayValueSelectRoom,
      displayValueSelectKennel,
      locationOptions
    } = this.props

    return (
      <FormWrapper data-cy="DataSetCreationForm" onSubmit={preventDefault}>
        <div>
          <Input
            onChange={onChange}
            name="name"
            placeholder="Mieze"
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
            placeholder="276097200023868"
            label="Transponder: "
            inputRef={this.transponderNrInputRef}
          />
        </div>
        <div>
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
        </div>
        <div>
          <Checkbox
            onCheck={onCheck}
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
            displayValue={displayValueCheckboxAdoptable}
          />
        </div>
        <div>
          <Button onClick={this.handleSubmit} text="Anlegen" />
        </div>
      </FormWrapper>
    )
  }

  handleSubmit = () => {
    this.props.onSubmit()
    this.nameInputRef.current.value = ''
    this.idInputRef.current.value = ''
    this.transponderNrInputRef.current.value = ''
  }
}
