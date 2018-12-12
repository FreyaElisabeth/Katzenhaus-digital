import { loadFromLocalStorage } from '../services/operations'

export default {
  dataSets: loadFromLocalStorage() || [],
  formValues: {
    nameInput: '',
    idInput: '',
    transponderNrInput: '',
    adoptableCheckbox: false,
    houseInput: '',
    roomInput: '',
    kennelInput: '',
    inShelterSinceInput: '',
    raceInput: '',
    colorInput: '',
    dateOfBirthInput: '',
    sexInput: '',
    spayedOrNeuteredCheckbox: false,
    escapologistCheckbox: false,
    aggressiveCheckbox: false,
    assertiveCheckbox: false,
    nervousCheckbox: false,
    outdoorCatCheckbox: false,
    toiletTrainedCheckbox: false,
    acuteDiseasesInput: '',
    chronicDiseasesInput: '',
    medicationInput: '',
    nutritionInput: '',
    otherTreatmentsInput: '',
    freeTextInfoInput: ''
  }
}