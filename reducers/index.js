import { combineReducers } from 'redux'
import { decks } from './decks'
import { shared } from './shared'

export default combineReducers({
  decks,
  shared,
})