import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
// import { receiveDecks, addDeck } from '../actions/decks'
// import { getInitData } from '../utils/api'
import { handleInitialData } from '../actions/shared'
import { gray } from '../utils/colors'

class Decks extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData())
        // getInitData()
        //   .then((entries) => dispatch(receiveEntries(entries)))
      }

    render() {

        const { decks } = this.props
        // console.log(decks)
        return (
            <View style={styles.deckList}>
                {decks && Object.keys(decks).map((deck) => (
                    <TouchableOpacity 
                        key={deck} 
                        style={styles.deckListItem}
                        onPress={() => console.log(deck)}>
                        <Text style={{fontSize: 20, textAlign: "center"}}>{decks[deck].name}</Text>
                        <Text style={{fontSize: 16, color: gray, textAlign: "center"}}>{decks[deck].cards.length} cards</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListItem: {
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: gray
    }
})

function mapStateToProps({decks}) {
    console.log(decks)
    return {
        decks
    }
}

export default connect(mapStateToProps)(Decks)