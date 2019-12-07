import { getInitData, loadDecks } from '../utils/api'
import { receiveDecks } from './decks'

export function handleInitialData() {
  return (dispatch) => {
    console.log(loadDecks())
    return loadDecks()
      .then(decks => {
        console.log(JSON.parse(decks))
          // dispatch(receiveDecks(decks))
      })
  }
}

