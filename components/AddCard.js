import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/decks'
import { NavigationActions } from 'react-navigation'
import { lightPurp } from '../utils/colors'


class AddCard extends Component {

    state = {
        q: '',
        a: '',
    }
    onChangeText = (e, type) => {
        this.setState(() => ({
            [type]: e
        }))
    }
    submit = () => {
        const { q, a } = this.state

        if (q === '' || a === '') { return }

        this.props.dispatch(handleAddCard({
            deck: this.props.deck,
            question: q,
            answer: a,
        }))
        this.setState(() => ({
            a: '',
            q: '',
        }))
        this.back()
    }
    back = () => {
        this.props.navigation.dispatch(NavigationActions.back())
    }

    render() {
        const { q, a } = this.state
        return (
            <View style={{height: '100%', alignItems: "center"}}>
                <Text style={styles.title}>Add card</Text>
                <TextInput
                    style={styles.input}
                    value={q}
                    placeholder="Question"
                    onChangeText={(e) => this.onChangeText(e, 'q')}>
                </TextInput>
                <TextInput
                    style={styles.input}
                    value={a}
                    placeholder="Answer"
                    onChangeText={(e) => this.onChangeText(e, 'a')}>
                </TextInput>
                <TouchableOpacity 
                    onPress={this.submit}
                    style={styles.addBtn}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#ffffff"}}>
                        Save card
                    </Text>
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
        fontWeight: "700",
    },
    addBtn: {
        width: 200,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 12,
        marginBottom: 12,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: lightPurp,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 12,
        marginBottom: 12,
        padding: 8,
    }
})

function mapStateToProps(state, {navigation}) {

    const { deck } = navigation.state.params
    return {
        deck
    }
}

export default connect(mapStateToProps)(AddCard)