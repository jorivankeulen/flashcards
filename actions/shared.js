import { getInitData } from '../utils/api'
import { receiveDecks } from './decks'

export function handleInitialData() {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        // console.log(decks)
          dispatch(receiveDecks(decks))
      })
  }
}

