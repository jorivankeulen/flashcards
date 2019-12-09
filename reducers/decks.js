import { 
  RECEIVE_DECKS, 
  ADD_DECK,
  ADD_CARD,
} from '../actions/decks'

export function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
    return {
      ...state,
      ...action.decks,
    }
    case ADD_DECK :
      return {
        ...state,
        // newestID: action.deck.id,
        [action.deck.id]: action.deck
      }
    case ADD_CARD :
      const card = [action.question, action.answer]
      return {
        ...state,
        [action.deck.id]: {
          ...action.deck,
          cards: [
            ...state[action.deck.id].cards,
            card
          ]
        }
      }
    default :
      return state
  }
}
