import { getInitData, loadDecks } from '../utils/api'
import { receiveDecks } from './decks'

export function handleInitialData() {
  return (dispatch) => {
    return loadDecks()
      .then(decks => {
        dispatch(receiveDecks(JSON.parse(decks)))
      })
  }
}

