import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const handleChange = (state, action) => {
  const { input, value } = action.payload

  return {
    ...state,
    [input]: value
  }
}

const replaceCats = (state, { payload }) => {
  return {
    ...state,
    dataSets: payload
  }
}

const resetFormValues = state => {
  return {
    ...state,
    formValues: {
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
    }
  }
}

export default createReducer(initialState, {
  handleChange,
  resetFormValues,
  replaceCats
})

/* function getData(state, action) {
  const { type, payload } = action
  const cats = payload

  getCats()
    .then(cats => {
      this.setState({
        dataSets: cats,
        ...state
      })
    })
    .catch(err => console.error(err))
} */
