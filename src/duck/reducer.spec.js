import reducer from './reducer'
import * as Actions from './actions'

describe('reducer', () => {
  it('has a test', () => {
    expect(true).toEqual(true)
  })

  it('can handleChange', () => {
    const state = { formInput: '' }
    const newState = reducer(state, Actions.handleChange('Mieze'))
    expect(newState).toEqual({ formInput: 'Mieze' })
  })
})
