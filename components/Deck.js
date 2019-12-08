import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { white, lightPurp } from '../utils/colors'

class Deck extends Component {
    render() {
        const {deck} = this.props
        return (
            <View style={{height: '100%', alignItems: "center"}}>
                <Text style={styles.title}>{deck && deck.name}</Text>
                <Text style={styles.subTitle}>{deck && deck.cards.length} cards</Text>
                <TouchableOpacity  
                    style={styles.quizBtn}
                    onPress={() => deck.cards.length === 0 
                        ? this.props.navigation.navigate("AddCard", { deck: deck })
                        : this.props.navigation.navigate("Quiz", { deck: deck })
                    }>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#ffffff"}}>Take Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.addBtn}
                    onPress={() =>
                        this.props.navigation.navigate("AddCard", { deck: deck })
                    }>
                    <Text style={{fontSize: 20, textAlign: "center", color: lightPurp}}>Add Cards</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        paddingTop: 56,
        paddingBottom: 8,
        fontSize: 32,
        fontWeight: "700",
    },
    subTitle: {
        textAlign: 'center',
        paddingTop: 8,
        paddingBottom: 24,
        fontSize: 26,
        fontWeight: "300",
    },
    quizBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: lightPurp,
        
    },
    addBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: white,
        borderColor: lightPurp,
        borderWidth: 1,
    },
})

function mapStateToProps(decks, {navigation}) {
    const deck = decks.decks[navigation.state.params.id]
    return {
        deck
    }
}

export default connect(mapStateToProps)(Deck)