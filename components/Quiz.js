import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import TextButton from './TextButton'


class Quiz extends Component {
    
    state = {
        step: 0,
        correct: 0,
        showAnswer: false,
    }

    answer = (correct) => {
        correct
            ? this.setState((prev) => ({ 
                step: prev.step + 1,
                correct: prev.correct + 1,
                showAnswer: false,
            }))
            : this.setState((prev) => ({ 
                step: prev.step + 1,
                showAnswer: false,
            }))
    }

    flipCard = () => {
        this.setState((prev) => ({
            showAnswer: !prev.showAnswer
        }))
    }

    render() {
        const { deck } = this.props
        console.log(deck)
        const stepTotal = deck 
            ? deck.cards.length
            : 0

        const { step, correct, showAnswer } = this.state
        const stepText = step + 1
        return (
            <View>
                {stepText <= stepTotal && 
                    <View>
                        <Text>Question { stepText } of { stepTotal }</Text>
                        {!showAnswer && 
                            <View>
                                <Text>{ deck.cards[step][0]}?</Text>
                                <TextButton style={{padding: 10}} onPress={this.flipCard}>
                                    Show answer
                                </TextButton>
                            </View>
                        }
                        {showAnswer && 
                            <View>                            
                                <Text>{ deck.cards[step][1]}!</Text>
                                <TextButton style={{padding: 10}} onPress={this.flipCard}>
                                    Show question
                                </TextButton>
                            </View>                            
                        }
                        <TouchableOpacity  
                            onPress={() =>
                                this.answer(true)
                            }>
                            <Text style={{fontSize: 20, textAlign: "center"}}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            onPress={() =>
                                this.answer(false)
                            }>
                            <Text style={{fontSize: 20, textAlign: "center"}}>Incorrect</Text>
                        </TouchableOpacity>

                    </View>
                }
                {stepText > stepTotal &&
                    <Text>You got {correct} out of {stepTotal}</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(decks, {navigation}) {
    // console.log(decks.decks)
    // console.log(navigation.state.params.deck)
    // const deck = decks.decks[navigation.state.params.id]
    const deck = navigation.state.params.deck
    return {
        deck
    }
}


export default connect(mapStateToProps)(Quiz)