import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {MainTobHomeStackNavi, MainBottomHomeStackNavi} from './src/navigation/navigation';

// enableScreens();

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
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainTobHomeStackNavi />
        </SafeAreaProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
