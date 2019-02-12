import { createAction } from 'redux-starter-kit'
import * as catService from '../services/cats'

export const handleChange = createAction('handleChange')
export const resetFormValues = createAction('resetFormValues')

export const getCatsDone = createAction('getCatsDone')
export const getCatsError = createAction('getCatsError')
export const fetchCats = () => dispatch => {
  console.log('fetchCats')
  catService
    .getCats()
    .then(fetchedCats => dispatch(getCatsDone(fetchedCats)))
    .catch(error => dispatch(getCatsError(error)))
}

export const createNewCatDone = createAction('createNewCatDone')
export const createNewCatError = createAction('createNewCatError')
export const createNewCat = (
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
) => dispatch => {
  catService
    .postCat({
      name,
      id,
      transponderNr,
      adoptable,
      house,
      room,
      kennel,
      inShelterSince: new Date(inShelterSince),
      race,
      color,
      sex,
      spayedOrNeutered,
      dateOfBirth: new Date(dateOfBirth),
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
    .then(createdCat => dispatch(createNewCatDone(createdCat)))
    .catch(error => dispatch(createNewCatError(error)))
}
