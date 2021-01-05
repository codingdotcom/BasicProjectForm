import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
// import {SafeAreaView} from 'react-native-safe-area-context';

import {getBottomSpace} from 'react-native-iphone-x-helper';

import GlobalStyle from '../../styles/stylesGlobal';
import Colors from '../../contants/color';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={styles.container}>
          <Text> SignUpScreen </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const screenOptions = ({navigation, route}) => {
  return {};
};

export default SignUpScreen;
