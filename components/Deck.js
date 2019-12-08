import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Deck extends Component {
    render() {
        const {deck} = this.props
        return (
            <View>
                <Text>{deck && deck.name}</Text>
                <Text>{deck && deck.cards.length} cards</Text>
                <TouchableOpacity  
                    style={styles.quizBtn}
                    onPress={() =>
                        this.props.navigation.navigate("Quiz", { deck: deck })
                    }>
                    <Text style={{fontSize: 20, textAlign: "center"}}>Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.addBtn}
                    onPress={() =>
                        this.props.navigation.navigate("AddCard", { deck: deck })
                    }>
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

function mapStateToProps(decks, {navigation}) {
    const deck = decks.decks[navigation.state.params.id]
    return {
        deck
    }
}

export default connect(mapStateToProps)(Deck)