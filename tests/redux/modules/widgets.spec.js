import reducer, { initialState } from 'redux/modules/widgets'

describe('(Redux) Widgets', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
