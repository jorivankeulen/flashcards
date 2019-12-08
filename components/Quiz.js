import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import TextButton from './TextButton'
import {
    clearLocalNotification,
    setLocalNotification
  } from '../utils/notifications'
import { NavigationActions } from 'react-navigation'
import { 
    white, 
    green,
    red,
    gray,
    lightPurp
} from '../utils/colors'

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

    restart = () => {
        this.setState(() => ({
            step: 0,
            correct: 0,
            showAnswer: false,
        }))
    }

    back = () => {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        const { deck } = this.props
        console.log(deck)
        const stepTotal = deck 
            ? deck.cards.length
            : 0

        if (stepText > stepTotal) {
            clearLocalNotification()
                .then(setLocalNotification)
        }

        const { step, correct, showAnswer } = this.state
        const stepText = step + 1
        return (
            <View>
                {stepText <= stepTotal && 
                    <View style={{height: '100%', alignItems: "center"}}>
                        <Text style={{padding: 10}}>Question { stepText } of { stepTotal }</Text>
                        {!showAnswer && 
                            <View>
                                <Text style={styles.title}>{ deck.cards[step][0]}?</Text>
                                <TextButton style={{padding: 10, textTransform: 'uppercase'}} onPress={this.flipCard}>
                                    Show answer
                                </TextButton>
                            </View>
                        }
                        {showAnswer && 
                            <View>     
                                <Text style={styles.title}>{ deck.cards[step][1]}!</Text>
                                <TextButton style={{padding: 10, textTransform: 'uppercase'}} onPress={this.flipCard}>
                                    Show question
                                </TextButton>
                            </View>                            
                        }
                        <TouchableOpacity 
                            style={styles.correctBtn} 
                            onPress={() =>
                                this.answer(true)
                            }>
                            <Text style={{fontSize: 20, textAlign: "center", color: white}}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  
                            style={styles.incorrectBtn}
                            onPress={() =>
                                this.answer(false)
                            }>
                            <Text style={{fontSize: 20, textAlign: "center", color: white}}>Incorrect</Text>
                        </TouchableOpacity>

                    </View>
                }
                {stepText > stepTotal &&
                    <View style={{height: '100%', alignItems: "center"}}>
                        <Text style={styles.title}>You got {correct} out of {stepTotal}</Text>
                        <TouchableOpacity 
                            style={styles.restartBtn} 
                            onPress={() =>
                                this.restart()
                            }>
                            <Text style={{fontSize: 20, textAlign: "center", color: white}}>Take again</Text>
                        </TouchableOpacity>

                        <TextButton style={{padding: 10}} onPress={this.back}>
                            Back
                        </TextButton>
                    </View>
                }
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
    correctBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: green,  
    },
    incorrectBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: red,      
    },
    restartBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: lightPurp,
    },
})

function mapStateToProps(decks, {navigation}) {
    const deck = navigation.state.params.deck
    return {
        deck
    }
}


export default connect(mapStateToProps)(Quiz)