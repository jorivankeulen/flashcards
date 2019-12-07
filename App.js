import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
// import { purple, white } from './utils/colors'
// import { Constants } from 'expo'
import Decks from './components/Decks'
import Deck from './components/Deck'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// const Tabs = createBottomTabNavigator({
//   Decks: Decks,
//     // navigationOptions: {
//       // tabBarLabel: 'All decks',
//       // tabBarIcon: ({ tintColor }) => <FontAwesome name='credit-card' size={30} color={tintColor} />
//     // }
// })

class App extends React.Component {

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          {/* <UdaciStatusBar backgroundColor={purple} barStyle="light-content" /> */}
          {/* <Tabs /> */}
          <Deck />
        </View>
      </Provider>
    )
  }
}

// const AppNavigator = createStackNavigator({
//   App: {
//     screen: App,
//   },
// });

// export default createAppContainer(AppNavigator)
export default App