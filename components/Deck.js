import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class Deck extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData())
        // getInitData()
        //   .then((entries) => dispatch(receiveEntries(entries)))
      }
    render() {
        const {deck} = this.props
        return (
            <View>
                <Text>{deck && deck.name}</Text>
                <Text>{deck && deck.cards.length} cards</Text>
                <TouchableOpacity  
                    style={styles.quizBtn}
                    onPress={() => console.log(deck.id)}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.addBtn}
                    onPress={() => console.log(deck.id)}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>Add card</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quizBtn: {
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    addBtn: {
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
})

function mapStateToProps({decks}, {id}) {
    const deck = decks[Object.keys(decks)[0]]
    console.log(decks[Object.keys(decks)[0]])

    return {
        deck
    }
}

export default connect(mapStateToProps)(Deck)