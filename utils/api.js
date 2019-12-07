import { AsyncStorage } from 'react-native'
import { _getDecks, formatDeck } from './_DATA'

const API_KEY = "Flashcards:decks" 

export function getInitData () {
    return _getDecks()
        .then((decks) => (decks))
}

export function loadDecks() {
  return AsyncStorage.getItem(API_KEY)
}

export function storeDeck ({ entry, key }) {
    return AsyncStorage.mergeItem(API_KEY, JSON.stringify({
      [key]: entry
    }))
  }
