/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <Text style={styles.fontsize}>Engine: Hermes</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fontsize: {
    backgroundColor: 'orange',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'deeppink',
  },
});

export default App;
