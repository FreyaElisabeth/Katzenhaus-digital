import { loadFromLocalStorage } from '../services/operations'

export default {
  dataSets: loadFromLocalStorage() || [],
  formValues: {
    name: '',
    id: '',
    transponderNr: '',
    adoptable: false,
    house: '',
    room: '',
    kennel: '',
    inShelterSince: '',
    race: '',
    color: '',
    dateOfBirth: '',
    sex: '',
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
  },
  locationOptions: {
    'Altes Katzenhaus': {
      'Raum 1': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 2': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 3': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 4': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 5': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 6': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      Außengehege: {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      Küche: { '-': '-' }
    },
    'Neues Katzenhaus': {
      'Raum 1': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 2': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 3': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 4': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 5': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 6': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 7': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      'Raum 8': {
        'Kennel 1': 'Kennel 1',
        'Kennel 2': 'Kennel 2',
        'Kennel 3': 'Kennel 3',
        'Kennel 4': 'Kennel 4',
        'Kennel 5': 'Kennel 5',
        'Kennel 6': 'Kennel 6'
      },
      Spielzimmer: { '-': '-' },
      Büro: { '-': '-' },
      Umkleide: { '-': '-' }
    }
  }
}
