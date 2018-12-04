import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Select from './Select'
import ConditionalSelect from './ConditionalSelect'
import Button from './Button'
import Checkbox from './Checkbox'
import FormWrapper from '../Wrappers/FormWrapper'
import SeparatorAlignLeft from './SeparatorAlignLeft'
import DatePicker from './DatePicker'
import Radio from './Radio'

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
    this.raceInputRef = React.createRef()
    this.colorInputRef = React.createRef()
    this.dateOfBirthInputRef = React.createRef()
    this.sexInputRef = React.createRef()
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
      locationOptions,
      displayValueCheckboxAggressive,
      displayValueCheckboxEscapologist,
      displayValueCheckboxAssertive,
      displayValueCheckboxNervous,
      displayValueCheckboxOutdoorCat,
      displayValueCheckboxToiletTrained
    } = this.props

    return (
      <FormWrapper data-cy="DataSetCreationForm" onSubmit={preventDefault}>
        <section>
          <SeparatorAlignLeft text="Kopfdaten" />
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
        <section>
          <SeparatorAlignLeft text="Beschreibung" />
          <Input
            onChange={onChange}
            name="race"
            placeholder="Europäisch Kurzhaar"
            label="Rasse: "
            inputRef={this.raceInputRef}
          />
          <Input
            onChange={onChange}
            name="color"
            placeholder="schwarz-braun getigert"
            label="Farbe: "
            inputRef={this.colorInputRef}
          />
          <DatePicker
            onChange={onChange}
            name="dateOfBirth"
            label="Geburtsdatum: "
            inputRef={this.dateOfBirthInputRef}
          />
          <Radio
            onChange={onChange}
            name="sex"
            value="männlich"
            label="männlich"
            inputRef={this.sexInputRef}
          />
          <Radio
            onChange={onChange}
            name="sex"
            value="weiblich"
            label="weiblich"
            inputRef={this.sexInputRef}
          />
          <Radio
            onChange={onChange}
            name="sex"
            value="?"
            label="?"
            inputRef={this.sexInputRef}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Verhalten" />
          <Checkbox
            onCheck={onCheck}
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
            displayValue={displayValueCheckboxAdoptable}
          />
          <Checkbox
            onCheck={onCheck}
            name="escapologist"
            label="Fluchtneigung"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxEscapologist}
          />
          <Checkbox
            onCheck={onCheck}
            name="aggressive"
            label="aggressiv"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxAggressive}
          />
          <Checkbox
            onCheck={onCheck}
            name="assertive"
            label="selbstbewusst"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxAssertive}
          />
          <Checkbox
            onCheck={onCheck}
            name="nervous"
            label="ängstlich"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxNervous}
          />
          <Checkbox
            onCheck={onCheck}
            name="outdoorCat"
            label="Freigänger"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxOutdoorCat}
          />
          <Checkbox
            onCheck={onCheck}
            name="toiletTrained"
            label="stubenrein"
            inputRef={this.escapologistCheckboxRef}
            displayValue={displayValueCheckboxToiletTrained}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Sonstiges" />
          <Checkbox
            onCheck={onCheck}
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
            displayValue={displayValueCheckboxAdoptable}
          />
        </section>
        <section>
          <Button onClick={this.handleSubmit} text="Anlegen" />
        </section>
      </FormWrapper>
    )
  }

  handleSubmit = () => {
    this.props.onSubmit()
    this.nameInputRef.current.value = ''
    this.idInputRef.current.value = ''
    this.transponderNrInputRef.current.value = ''
    this.raceInputRef.current.value = ''
    this.colorInputRef.current.value = ''
    this.sexInputRef.current.checked = false
  }

  componentDidMount() {
    this.props.resetInputValues()
  }
}
