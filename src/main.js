import React, { Component } from 'react';
/*
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GridData from './components/GridData';
*/

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import appReducers from './reducers/appReducers'
import AppContainer from './containers/AppContainer'


let store = createStore(appReducers)

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


/*
render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
)
*/


/*
export default class Main extends Component {
  render() {
    return (
        <GridData />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/