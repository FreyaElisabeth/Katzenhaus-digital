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
    resetFormValues: PropType.func.isRequired,
    onChange: PropType.func.isRequired,
    createNewCat: PropType.func.isRequired,
    formValues: PropType.object.isRequired,
    locationOptions: PropType.object.isRequired
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
    const { onChange, locationOptions, formValues } = this.props
    const {
      adoptable,
      house,
      room,
      kennel,
      inShelterSince,
      spayedOrNeutered,
      dateOfBirth,
      aggressive,
      escapologist,
      assertive,
      nervous,
      outdoorCat,
      toiletTrained
    } = formValues

    return (
      <FormWrapper
        data-cy="DataSetCreationForm"
        onSubmit={(event, formValues) => {
          this.handleSubmit(event, formValues)
          console.table(formValues)
        }}
      >
        <section>
          <SeparatorAlignLeft text="Kopfdaten" />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="name"
            required={true}
            placeholder="Mieze"
            label="Name:* "
            inputRef={this.nameInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="id"
            required={true}
            placeholder="123_F_18"
            label="HTV-Nummer:* "
            inputRef={this.idInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="transponderNr"
            placeholder="276097200023868"
            label="Transponder: "
            inputRef={this.transponderNrInputRef}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
            displayValue={adoptable}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Unterbringung" />
          <Select
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="house"
            required={true}
            options={locationOptions}
            label="Haus:* "
            displayValue={house}
          />
          <ConditionalSelect
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="room"
            required={true}
            options={locationOptions}
            subset={house}
            label="Raum:* "
            displayValue={room}
          />
          <ConditionalSelect
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="kennel"
            options={locationOptions[house]}
            subset={room}
            label="Kennel: "
            displayValue={kennel}
          />
          <DatePicker
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="inShelterSince"
            label="Im Tierheim seit: "
            displayValue={inShelterSince}
          />
        </section>
        <section className="description">
          <SeparatorAlignLeft text="Beschreibung" />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="race"
            placeholder="Europäisch Kurzhaar"
            label="Rasse: "
            inputRef={this.raceInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="color"
            placeholder="schwarz-braun getigert"
            label="Farbe: "
            inputRef={this.colorInputRef}
          />
          <DatePicker
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="dateOfBirth"
            label="Geburtsdatum: "
            displayValue={dateOfBirth}
          />
          <Radio
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="sex"
            value="männlich"
            label="männlich"
            inputRef={this.sexInputRef}
          />
          <Radio
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="sex"
            value="weiblich"
            label="weiblich"
            inputRef={this.sexInputRef}
          />
          <Radio
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="sex"
            value="?"
            label="?"
            inputRef={this.sexInputRef}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="spayedOrNeutered"
            label="kastriert"
            displayValue={spayedOrNeutered}
          />
        </section>
        <section>
          <SeparatorAlignLeft text="Gesundheitszustand" />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="acuteDiseases"
            label="Akute Erkrankungen: "
            inputRef={this.acuteDiseasesInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="chronicDiseases"
            label="Chronische Erkrankungen: "
            inputRef={this.chronicDiseasesInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="medication"
            placeholder="Baytril 1mg 2xtgl."
            label="Medikamente: "
            inputRef={this.medicationInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="nutrition"
            label="Ernährung: "
            inputRef={this.nutritionInputRef}
          />
          <Input
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
            name="otherTreatments"
            label="Sonstige Behandlung: "
            inputRef={this.otherTreatmentsInputRef}
          />
        </section>
        <section className="behavior">
          <SeparatorAlignLeft text="Verhalten" />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="escapologist"
            label="Fluchtneigung"
            displayValue={escapologist}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="aggressive"
            label="aggressiv"
            displayValue={aggressive}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="assertive"
            label="selbstbewusst"
            displayValue={assertive}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="nervous"
            label="ängstlich"
            displayValue={nervous}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="outdoorCat"
            label="Freigänger"
            displayValue={outdoorCat}
          />
          <Checkbox
            onCheck={event =>
              onChange({
                input: event.target.name,
                value: event.target.checked
              })
            }
            name="toiletTrained"
            label="stubenrein"
            displayValue={toiletTrained}
          />
        </section>
        <section className="freeTextInfo">
          <SeparatorAlignLeft text="Sonstiges" />
          <TextArea
            onChange={event =>
              onChange({ input: event.target.name, value: event.target.value })
            }
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

  handleSubmit = (event, formValues) => {
    event.preventDefault()

    const {
      name,
      id,
      transponderNr,
      adoptable,
      house,
      room,
      kennel,
      inShelterSince,
      race,
      color,
      sex,
      spayedOrNeutered,
      dateOfBirth,
      escapologist,
      aggressive,
      assertive,
      nervous,
      outdoorCat,
      toiletTrained,
      acuteDiseases,
      chronicDiseases,
      medication,
      nutrition,
      otherTreatments,
      freeTextInfo
    } = formValues

    console.log(name)

    this.props.createNewCat({
      name,
      id,
      transponderNr,
      adoptable,
      house,
      room,
      kennel,
      inShelterSince,
      race,
      color,
      sex,
      spayedOrNeutered,
      dateOfBirth,
      escapologist,
      aggressive,
      assertive,
      nervous,
      outdoorCat,
      toiletTrained,
      acuteDiseases,
      chronicDiseases,
      medication,
      nutrition,
      otherTreatments,
      freeTextInfo
    })
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
