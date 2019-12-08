import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { NavigationActions } from 'react-navigation'

class AddDeck extends Component {

    state = {
        name: ''
    }
    onChangeText = (text) => {
        this.setState(() => ({
            name: text,
        }))
    }
    submit = () => {
        this.props.dispatch(handleAddDeck(this.state.name))
        this.setState(() => ({
            name: '',
        }))
        this.toHome()
    }
    toHome = () => {
        this.props.navigation.navigate("Decks")
    }
    // componentDidMount () {
    //     this.props.dispatch(handleInitialData())
    // // getInitData()
    // //   .then((entries) => dispatch(receiveEntries(entries)))
    // }
    render() {
        const { name } = this.state
        return (
            <View>
                <Text>Add deck</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    value={name}
                    onChangeText={(text) => this.onChangeText(text)}>
                </TextInput>
                <TouchableOpacity onPress={this.submit}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddDeck)