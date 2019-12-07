import { storeDeck } from '../utils/api'
import { formatDeck } from '../utils/_DATA'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck(name) {
  deck = formatDeck(name)
  return (dispatch) => {
    return storeDeck({key: deck.id, entry: deck})
      .then(dispatch(addDeck(deck)))
  }
}