import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import proizvodReducer from './store/reducers/proizvodi';

import Tabs from './components/navigation/Tabs';

//pravljenje centralnog reducera (spajanje svih reducera u jedan objekt)
const glavniReducer = combineReducers({
  proizvodi: proizvodReducer,
});

const centralniSpremnik = createStore(glavniReducer);

export default function App() {
  return (
    <Provider store={centralniSpremnik}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    </Provider>
  );
}
