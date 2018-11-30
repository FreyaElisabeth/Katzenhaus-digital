import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { darkestprimary } from '../colors'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import Checkbox from './Checkbox'

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

  render() {
    const {
      onChange,
      onCheck,
      preventDefault,
      displayValueSelectHouse,
      displayValueSelectRoom,
      displayValueSelectKennel
    } = this.props

    return (
      <StyledForm data-cy="DataSetCreationForm" onSubmit={preventDefault}>
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
          <Checkbox
            onCheck={onCheck}
            name="adoptable"
            label="vermittelbar"
            inputRef={this.adoptableCheckboxRef}
          />
        </div>
        <div>
          <Select
            onChange={onChange}
            name="house"
            options={['Neues Katzenhaus', 'Altes Katzenhaus', 'Außengehege']}
            label="Haus: "
            displayValue={displayValueSelectHouse}
          />
          <Select
            onChange={onChange}
            name="room"
            options={[
              'Spielzimmer',
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              'Krankenzimmer',
              'Büro',
              'Pausenraum'
            ]}
            label="Raum: "
            displayValue={displayValueSelectRoom}
          />
          <Select
            onChange={onChange}
            name="kennel"
            options={[1, 2, 3, 4, 5, 6, 7, 8]}
            label="Kennel: "
            displayValue={displayValueSelectKennel}
          />
        </div>
        <div>
          <Button onClick={this.handleSubmit} text="Anlegen" />
        </div>
      </StyledForm>
    )
  }

  handleSubmit = () => {
    this.props.onSubmit()
    this.nameInputRef.current.value = ''
    this.idInputRef.current.value = ''
    this.transponderNrInputRef.current.value = ''
  }
}

const StyledForm = styled.form`
  border: 1px solid ${darkestprimary};
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  padding: 20px;

  button {
    margin: 1em;
  }
`
