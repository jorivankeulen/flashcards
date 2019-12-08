import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleAddCard } from '../actions/decks'


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
        // console.log(this.props)
        this.props.dispatch(handleAddCard({
            deck: this.props.deck,
            question: this.state.q,
            answer: this.state.a,
        }))
    }

    render() {
        const { q, a } = this.state
        return (
            <View>
                <Text>Add card</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={q}
                    placeholder="Question"
                    onChangeText={(e) => this.onChangeText(e, 'q')}>
                </TextInput>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={a}
                    placeholder="Answer"
                    onChangeText={(e) => this.onChangeText(e, 'a')}>
                </TextInput>
                <TouchableOpacity onPress={this.submit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, {navigation}) {

    const { deck } = navigation.state.params
    return {
        deck
    }
}

export default connect(mapStateToProps)(AddCard)