import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { lightPurp } from '../utils/colors'

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
        const { name } = this.state
        
        if ( name === '' ) { return }

        this.props.dispatch(handleAddDeck(name))
        this.setState(() => ({
            name: '',
        }))

        this.toHome()
    }
    toHome = () => {
        this.props.navigation.navigate("Decks")
    }

    render() {
        const { name } = this.state
        return (
            <View style={{height: '100%', alignItems: "center"}}>
                <Text style={styles.title}>Add deck</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Name of your deck"
                    onChangeText={(text) => this.onChangeText(text)}>
                </TextInput>
                <TouchableOpacity 
                    onPress={this.submit}
                    style={styles.addBtn}>
                    <Text style={{fontSize: 20, textAlign: "center", color: "#ffffff"}}>
                        Create deck
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


export default connect()(AddDeck)