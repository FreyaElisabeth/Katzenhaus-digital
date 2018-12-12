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
      Actions.handleChange({ input: 'nameInput', value: 'Mieze' })
    )
    expect(newState).toEqual({ nameInput: 'Mieze' })
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
      formValues: {
        nameInput: 'Mr Mews',
        idInput: 'id',
        transponderNrInput: '123',
        houseInput: 'Neu',
        roomInput: '1',
        kennelInput: '2',
        inShelterSinceInput: 'yesterday',
        adoptableCheckbox: true,
        colorInput: 'black',
        raceInput: 'European Shorthair',
        sexInput: 'male',
        dateOfBirthInput: '2 years ago',
        spayedOrNeuteredCheckbox: true,
        escapologistCheckbox: true,
        aggressiveCheckbox: true,
        assertiveCheckbox: true,
        nervousCheckbox: true,
        outdoorCatCheckbox: true,
        toiletTrainedCheckbox: true,
        acuteDiseases: 'acuteDiseasesInput',
        chronicDiseases: 'chronicDiseasesInput',
        medication: 'medicationInput',
        nutrition: 'nutritionInput',
        otherTreatments: 'otherTreatmentsInput',
        freeTextInfo: 'freeTextInfoInput'
      }
    }
    const newState = reducer(state, Actions.resetFormValues())

    expect(newState).toEqual({
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
        toiletTrainedCheckbox: false,
        acuteDiseases: '',
        chronicDiseases: '',
        medication: '',
        nutrition: '',
        otherTreatments: '',
        freeTextInfo: ''
      }
    })
  })

  it('can createNewDataSet', () => {
    const state = {}
    const newState = reducer(
      state,
      Actions.createNewDataSet({
        name: 'nameInput',
        id: 'idInput',
        transponderNr: 'transponderNrInput',
        adoptable: 'adoptableCheckbox',
        house: 'houseInput',
        room: 'roomInput',
        kennel: 'kennelInput',
        inShelterSince: 'new Date(inShelterSinceInput)',
        race: 'raceInput',
        color: 'colorInput',
        sex: 'sexInput',
        spayedOrNeutered: true,
        dateOfBirth: 'new Date(dateOfBirthInput)',
        escapologist: true,
        aggressive: false,
        assertive: true,
        nervous: false,
        outdoorCat: true,
        toiletTrained: true,
        acuteDiseases: 'acuteDiseasesInput',
        chronicDiseases: 'chronicDiseasesInput',
        medication: 'medicationInput',
        nutrition: 'nutritionInput',
        otherTreatments: 'otherTreatmentsInput',
        freeTextInfo: 'freeTextInfoInput'
      })
    )
    expect(newState).toEqual({
      dataSets: {
        name: 'nameInput',
        id: 'idInput',
        transponderNr: 'transponderNrInput',
        adoptable: 'adoptableCheckbox',
        house: 'houseInput',
        room: 'roomInput',
        kennel: 'kennelInput',
        inShelterSince: 'new Date(inShelterSinceInput)',
        race: 'raceInput',
        color: 'colorInput',
        sex: 'sexInput',
        spayedOrNeutered: true,
        dateOfBirth: 'new Date(dateOfBirthInput)',
        escapologist: true,
        aggressive: false,
        assertive: true,
        nervous: false,
        outdoorCat: true,
        toiletTrained: true,
        acuteDiseases: 'acuteDiseasesInput',
        chronicDiseases: 'chronicDiseasesInput',
        medication: 'medicationInput',
        nutrition: 'nutritionInput',
        otherTreatments: 'otherTreatmentsInput',
        freeTextInfo: 'freeTextInfoInput'
      }
    })
  })
})
