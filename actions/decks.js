import { storeDeck, storeCard } from '../utils/api'
import { formatDeck } from '../utils/_DATA'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

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



export function addCard ({deck, question, answer}) {
  return {
    type: ADD_CARD,
    deck,
    question,
    answer
  }
}

export function handleAddCard({deck, question, answer}) {
  return (dispatch) => {
    return storeCard({deck, question, answer})
      .then(dispatch(addCard({deck, question, answer})))
  }
}

export function handleAddDeck(name) {
  deck = formatDeck(name)
  return (dispatch) => {
    return storeDeck({key: deck.id, entry: deck})
      .then(dispatch(addDeck(deck)))
  }
}

