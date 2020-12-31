import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {NavigationContainer} from '@react-navigation/native';

import {AllStackNavigation} from './src/navigation/Navigation';
import Colors from './src/contants/color';
import SafeAreaPadding from './src/styles/SafeAreaPadding';
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

import {Provider} from 'react-redux';
import {store} from './src/redux';

enableScreens();

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}

      <SafeAreaProvider>
        {/* <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}> */}
        <NavigationContainer>
          <AllStackNavigation />
        </NavigationContainer>
        {/* </SafeAreaView> */}
      </SafeAreaProvider>

      {/* </Provider> */}
    </>
  );
};

export default App;
