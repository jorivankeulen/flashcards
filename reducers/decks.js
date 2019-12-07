import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks'

export function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      // console.log(action)
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }
    default :
      return state
  }
}
