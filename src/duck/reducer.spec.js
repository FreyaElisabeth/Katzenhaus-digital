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
    expect(newState).toEqual({ formValues: { name: 'Mieze' } })
  })

  it('can handleCheck', () => {
    const state = { formValues: { adoptable: false } }
    const newState = reducer(
      state,
      Actions.handleChange({ input: 'adoptable', value: true })
    )
    expect(newState).toEqual({ formValues: { adoptable: true } })
  })

  it('can resetFormValues', () => {
    const state = {
      formValues: {
        name: 'Mr Mews',
        id: 'id',
        transponderNr: '123',
        house: 'Neu',
        room: '1',
        kennel: '2',
        inShelterSince: 'yesterday',
        adoptable: true,
        color: 'black',
        race: 'European Shorthair',
        sex: 'male',
        dateOfBirth: '2 years ago',
        spayedOrNeutered: true,
        escapologist: true,
        aggressive: true,
        assertive: true,
        nervous: true,
        outdoorCat: true,
        toiletTrained: true,
        acuteDiseases: 'acuteDiseases',
        chronicDiseases: 'chronicDiseases',
        medication: 'medication',
        nutrition: 'nutrition',
        otherTreatments: 'otherTreatments',
        freeTextInfo: 'freeTextInfo'
      }
    }
    const newState = reducer(state, Actions.resetFormValues())

    expect(newState).toEqual({
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
