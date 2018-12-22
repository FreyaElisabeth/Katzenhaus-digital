import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const handleChange = (state, action) => {
  const { input, value } = action.payload

  return {
    ...state,
    formValues: {
      ...state.formValues,
      [input]: value
    }
  }
}

const resetFormValues = state => {
  return {
    ...state,
    formValues: {
      name: '',
      id: '',
      transponderNr: '',
      house: '',
      room: '',
      kennel: '',
      inShelterSince: '',
      adoptable: false,
      color: '',
      race: '',
      sex: '',
      dateOfBirth: '',
      spayedOrNeutered: false,
      escapologist: false,
      aggressive: false,
      assertive: false,
      nervous: false,
      outdoorCat: false,
      toiletTrained: false,
      acuteDiseases: '',
      chronicDiseases: '',
      medication: '',
      nutrition: '',
      otherTreatments: '',
      freeTextInfo: ''
    }
  }
}

const replaceCats = (state, { payload }) => {
  return {
    ...state,
    dataSets: payload
  }
}

const addNewDataSet = (state, { payload }) => {
  return {
    ...state,
    dataSets: { ...state.dataSets },
    payload
  }
}

export default createReducer(initialState, {
  handleChange,
  resetFormValues,
  replaceCats,
  addNewDataSet
})
