import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {LogInStackNavigation} from './src/navigation/AuthStackNavigation';
import {MainHomeStackNavigation} from './src/navigation/MainHomeNavigation';
import Colors from './src/contants/color';
import SafeAreaPadding from './src/styles/SafeAreaPadding';
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

enableScreens();

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

// const rootReducer = combineReducers({
//   auth:authReducer,
//   memberData:memberDataReducer
// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <>
      <LogInStackNavigation />
    </>
  );
};

export default App;
