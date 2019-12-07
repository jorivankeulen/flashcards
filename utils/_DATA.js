function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDeck (name) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        name,
        cards: [],
    }
}

export function addCard ({deckID, question, answer}) {
    decks = {
        ...decks,
        [deckID]: {
            ...decks[deckID],
            cards: [
                ...decks[deckID].cards,
                [question, answer]
            ]
        }
    }

}

export function _getDecks () {
    return new Promise((res, rej) => {
        setTimeout(() => res({...decks}), 1000)
    })  
}

