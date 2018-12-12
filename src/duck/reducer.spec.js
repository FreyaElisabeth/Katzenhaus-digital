import reducer from './reducer'
import * as Actions from './actions'

describe('reducer', () => {
  it('has a test', () => {
    expect(true).toEqual(true)
  })

  it('can handleChange', () => {
    const state = {}
    const newState = reducer(
      state,
      Actions.handleChange({ input: 'name', value: 'Mieze' })
    )
    expect(newState).toEqual({ name: 'Mieze' })
  })

  it('can handleCheck', () => {
    const state = { adoptable: false }
    const newState = reducer(
      state,
      Actions.handleChange({ input: 'adoptable', value: true })
    )
    expect(newState).toEqual({ adoptable: true })
  })

  it('can resetFormValues', () => {
    const state = {
      nameInput: 'Mr Mews',
      idInput: 'id',
      transponderNrInput: '123',
      houseInput: 'Neu',
      roomInput: '1',
      kennelInput: '2',
      inShelterSinceInput: 'yesterday',
      adoptableCheckbox: false,
      colorInput: 'black',
      raceInput: 'European Shorthair',
      sexInput: 'male',
      dateOfBirthInput: '2 years ago',
      spayedOrNeuteredCheckbox: false,
      escapologistCheckbox: false,
      aggressiveCheckbox: false,
      assertiveCheckbox: false,
      nervousCheckbox: false,
      outdoorCatCheckbox: false,
      toiletTrainedCheckbox: false
    }
    const newState = reducer(state, Actions.resetFormValues())

    expect(newState).toEqual({
      nameInput: '',
      idInput: '',
      transponderNrInput: '',
      houseInput: '',
      roomInput: '',
      kennelInput: '',
      inShelterSinceInput: '',
      adoptableCheckbox: false,
      colorInput: '',
      raceInput: '',
      sexInput: '',
      dateOfBirthInput: '',
      spayedOrNeuteredCheckbox: false,
      escapologistCheckbox: false,
      aggressiveCheckbox: false,
      assertiveCheckbox: false,
      nervousCheckbox: false,
      outdoorCatCheckbox: false,
      toiletTrainedCheckbox: false
    })
  })
})
