import React, { Component } from 'react'
import PropType from 'prop-types'

import FormWrapper from '../Wrappers/FormWrapper'
import SeparatorAlignLeft from './SeparatorAlignLeft'
import Input from './Input'
import Select from './Select'
import ConditionalSelect from './ConditionalSelect'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import Radio from './Radio'
import TextArea from './TextArea'
import SubmitBtn from './SubmitBtn'

export default class DataSetCreationForm extends Component {
  static propTypes = {
    onChange: PropType.func.isRequired,
    onCheck: PropType.func.isRequired,
    onSubmit: PropType.func.isRequired,
    preventDefault: PropType.func.isRequired,
    formValues: PropType.object.isRequired
  }

  constructor(props) {
    super(props)
    this.nameInputRef = React.createRef()
    this.acuteDiseasesInputRef = React.createRef()
    this.chronicDiseasesInputRef = React.createRef()
    this.nutritionInputRef = React.createRef()
    this.medicationInputRef = React.createRef()
    this.otherTreatmentsInputRef = React.createRef()
    this.textAreaInputRef = React.createRef()
    this.idInputRef = React.createRef()
    this.transponderNrInputRef = React.createRef()
    this.raceInputRef = React.createRef()
    this.colorInputRef = React.createRef()
    this.dateOfBirthInputRef = React.createRef()
    this.sexInputRef = React.createRef()
  }

  render() {
    const { onChange, onCheck, locationOptions } = this.props
    const {
      adoptableCheckbox,
      houseInput,
      roomInput,
      kennelInput,
      inShelterSinceInput,
      spayedOrNeuteredCheckbox,
      dateOfBirthInput,
      aggressiveCheckbox,
      escapologistCheckbox,
      assertiveCheckbox,
      nervousCheckbox,
      outdoorCatCheckbox,
      toiletTrainedCheckbox
    } = this.props.formValues

    return (
      <FormWrapper data-cy="DataSetCreationForm" onSubmit={this.handleSubmit}>
        <section>
          <SeparatorAlignLeft text="Kopfdaten" />
          <Input
            onChange={onChange}
            name="name"
            required={true}
            placeholder="Mieze"
            label="Name: "
            inputRef={this.nameInputRef}
          />
          <Input
            onChange={onChange}
            name="id"
            required={true}
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
          <Checkbox
            onCheck={onCheck}
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
            displayValue={adoptableCheckbox}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Unterbringung" />
          <Select
            onChange={onChange}
            name="house"
            required={true}
            options={locationOptions}
            label="Haus: "
            displayValue={houseInput}
          />
          <ConditionalSelect
            onChange={onChange}
            name="room"
            required={true}
            options={locationOptions}
            subset={houseInput}
            label="Raum: "
            displayValue={roomInput}
          />
          <ConditionalSelect
            onChange={onChange}
            name="kennel"
            options={locationOptions[houseInput]}
            subset={roomInput}
            label="Kennel: "
            displayValue={kennelInput}
          />
          <DatePicker
            onChange={onChange}
            name="inShelterSince"
            label="Im Tierheim seit: "
            displayValue={inShelterSinceInput}
          />
        </section>
        <section className="description">
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
            displayValue={dateOfBirthInput}
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
          <Checkbox
            onCheck={onCheck}
            name="spayedOrNeutered"
            label="kastriert"
            displayValue={spayedOrNeuteredCheckbox}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Gesundheitszustand" />
          <Input
            onChange={onChange}
            name="acuteDiseases"
            label="Akute Erkrankungen: "
            inputRef={this.acuteDiseasesInputRef}
          />
          <Input
            onChange={onChange}
            name="chronicDiseases"
            label="Chronische Erkrankungen: "
            inputRef={this.chronicDiseasesInputRef}
          />
          <Input
            onChange={onChange}
            name="medication"
            placeholder="Baytril 1mg 2xtgl."
            label="Medikamente: "
            inputRef={this.medicationInputRef}
          />
          <Input
            onChange={onChange}
            name="nutrition"
            label="Ernährung: "
            inputRef={this.nutritionInputRef}
          />
          <Input
            onChange={onChange}
            name="otherTreatments"
            label="Sonstige Behandlung: "
            inputRef={this.otherTreatmentsInputRef}
          />
        </section>
        <section className="behavior">
          <SeparatorAlignLeft text="Verhalten" />
          <Checkbox
            onCheck={onCheck}
            name="escapologist"
            label="Fluchtneigung"
            displayValue={escapologistCheckbox}
          />
          <Checkbox
            onCheck={onCheck}
            name="aggressive"
            label="aggressiv"
            displayValue={aggressiveCheckbox}
          />
          <Checkbox
            onCheck={onCheck}
            name="assertive"
            label="selbstbewusst"
            displayValue={assertiveCheckbox}
          />
          <Checkbox
            onCheck={onCheck}
            name="nervous"
            label="ängstlich"
            displayValue={nervousCheckbox}
          />
          <Checkbox
            onCheck={onCheck}
            name="outdoorCat"
            label="Freigänger"
            displayValue={outdoorCatCheckbox}
          />
          <Checkbox
            onCheck={onCheck}
            name="toiletTrained"
            label="stubenrein"
            displayValue={toiletTrainedCheckbox}
          />
        </section>
        <section className="freeTextInfo">
          <SeparatorAlignLeft text="Sonstiges" />
          <TextArea
            onChange={onChange}
            name="freeTextInfo"
            label="Zusatzinformationen: "
            inputRef={this.textAreaInputRef}
          />
        </section>
        <div className="submit">
          <SubmitBtn text="Datensatz anlegen" />
        </div>
      </FormWrapper>
    )
  }

  handleSubmit = event => {
    this.props.preventDefault(event)
    this.props.onSubmit()
    this.nameInputRef.current.value = ''
    this.idInputRef.current.value = ''
    this.transponderNrInputRef.current.value = ''
    this.raceInputRef.current.value = ''
    this.colorInputRef.current.value = ''
    this.acuteDiseasesInputRef.current.value = ''
    this.chronicDiseasesInputRef.current.value = ''
    this.nutritionInputRef.current.value = ''
    this.medicationInputRef.current.value = ''
    this.otherTreatmentsInputRef.current.value = ''
    this.textAreaInputRef.current.value = ''
  }

  componentDidMount() {
    this.props.resetFormValues()
  }
}
