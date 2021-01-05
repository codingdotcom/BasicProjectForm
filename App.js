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

import {Provider as PaperProvider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Provider} from 'react-redux';
import {store} from './src/redux';

enableScreens();

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <PaperProvider
          settings={{
            icon: (props) => <FontAwesome style={{textAlign: 'center'}} {...props} />,
          }}>
          <NavigationContainer>
            <AllStackNavigation />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>

      {/* <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
          <TestModal />
        </SafeAreaView>
      </SafeAreaProvider> */}
    </>
  );
};

export default App;
