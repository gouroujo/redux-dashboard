/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const ADD_WIDGET = 'ADD_WIDGET'

// ------------------------------------
// Actions
// ------------------------------------
let nextWidgetId = 0
export function addWidget () {
  return {
    type: ADD_WIDGET,
    widgetId: nextWidgetId++,
    text: 'yo'
  }
}

export const actions = {
  addWidget
}
const REDUCER_HANDLERS = {
  [ADD_WIDGET]: (state, action) => (
    {
      id: action.widgetId,
      text: action.text
    }
  )
}
const ACTION_HANDLERS = {
  [ADD_WIDGET]: (state: array, action: {text: string}): array => (
    [...state, REDUCER_HANDLERS[action.type](undefined, action)]
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function widgetsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
