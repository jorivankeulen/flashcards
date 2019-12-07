import { RECEIVE_DECKS, ADD_DECK } from '../actions/decks'

export function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
    return {
      ...state,
      ...action.decks,
    }
    case ADD_DECK :
    // console.log(state)
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    default :
      return state
  }
}