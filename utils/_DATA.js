let decks = {
    "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        name: 'deck1',
        cards: [
            ["What color is the sky?", "Blue"],
            ["Big cat with spots?", "Leopard"],
            ["Something you live in?", "House"],
        ],
        timestamp: 1468479767190
    },
    "8xf0y6ziyjabvozdd253nd": {
        id: '6ni6ok3ym7mf1p33lnez',
        name: 'deck2',
        timestamp: 1467166872634,
        cards: [
            ["What color is the sky?", "Red"],
            ["Big cat with spots?", "Dog"],
            ["Something you live in?", "Bike"],
        ],
    },
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatDeck ({ name }) {
    return {
        id: generateUID(),
        timestamp: Date.now(),
        name,
        cards: [],
    }
}

function addCard ({deckID, question, answer}) {
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