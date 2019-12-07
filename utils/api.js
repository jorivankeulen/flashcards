import { AsyncStorage } from 'react-native'
import { _getDecks } from './_DATA'

const API_KEY = "Flashcards:decks" 

export function getInitData () {
    return _getDecks()
        .then((decks) => (decks))

}

export function getDecks () {
  return AsyncStorage.getItem(API_KEY)
    .then((decks) => decks)
}

export function submitDecks ({ entry, key }) {
    return AsyncStorage.mergeItem(API_KEY, JSON.stringify({
      [key]: entry
    }))
  }
