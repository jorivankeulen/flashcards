import { getInitData, loadDecks } from '../utils/api'
import { receiveDecks } from './decks'

export const CLEAR_NEW_ID = 'CLEAR_NEW_ID'

export function clearNewID () {
  return {
    type: CLEAR_NEW_ID,
  }
}

export function handleInitialData() {
  return (dispatch) => {
    return loadDecks()
      .then(decks => {
        dispatch(receiveDecks(JSON.parse(decks)))
      })
  }
}

