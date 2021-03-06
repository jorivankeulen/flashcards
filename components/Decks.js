import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux'
// import { receiveDecks, addDeck } from '../actions/decks'
// import { getInitData } from '../utils/api'
import { handleInitialData, clearNewID } from '../actions/shared'
import { gray } from '../utils/colors'


class Decks extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialData())
      }
    componentDidUpdate() {
        const { shared } = this.props

        if (shared.newID && shared.newID.length > 1 ) {
            this.gotoNewDeck(shared.newID)
        }
    }
    gotoNewDeck = (id) => {
        this.props.dispatch(clearNewID())
        this.props.navigation.navigate("Deck", { id: id })
    }
    
    render() {
        const { decks } = this.props
       
            
        return (
            <View style={styles.deckList}>
                <FlatList
                    data={Object.keys(decks)}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() =>
                                this.props.navigation.navigate("Deck", { id: item })
                            }
                            style={styles.deckListItem}
                            // onPress={() => console.log(item)}
                        >
                            <Text style={{fontSize: 20, textAlign: "center"}}>{decks[item].name}</Text>
                            <Text style={{fontSize: 16, color: gray, textAlign: "center"}}>{decks[item].cards.length} cards</Text>
                        </TouchableOpacity>
                    )} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckListItem: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: gray
    }
})

function mapStateToProps({shared, decks}) {
    return {
        decks,
        shared
    }
}

export default connect(mapStateToProps)(Decks)