import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import widgets from './modules/widgets'

export default combineReducers({
  widgets,
  router
})
