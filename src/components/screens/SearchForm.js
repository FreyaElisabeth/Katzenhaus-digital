import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Input from '../ui/Input'
import Select from '../ui/Select'
import FormWrapper from '../Wrappers/FormWrapper'

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
      displayValueSelectKennel
    } = this.props

    return (
      <FormWrapper data-cy="SearchForm" onSubmit={onSubmit}>
        <div>
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
      </FormWrapper>
    )
  }

  componentDidMount() {
    this.props.resetInputValues()
  }
}
