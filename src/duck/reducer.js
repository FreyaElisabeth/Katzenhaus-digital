import { createReducer } from 'redux-starter-kit'
import initialState from './initialState'

const handleChange = (state, action) => {
  const value = action.payload

  return {
    ...state,
    formInput: value
  }
}

export default createReducer(initialState, {
  handleChange: handleChange
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
