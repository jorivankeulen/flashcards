import { RECEIVE_DECKS,ADD_DECK} from '../actions/decks'
import { CLEAR_NEW_ID} from '../actions/shared'

  export function shared (state = {}, action) {
    switch (action.type) {
      case RECEIVE_DECKS :
        return {
          newID: '',
        }
      case ADD_DECK :
        return {
          newID: action.deck.id,
        }
      case CLEAR_NEW_ID :
        return {
          newID: '',
        }
      default :
        return state
    }
  }
  