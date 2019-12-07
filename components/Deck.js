import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Deck extends Component {
    render() {
        return (
            <View>
                <Text>view deck</Text>
            </View>
        )
    }
}

export default connect()(Deck)