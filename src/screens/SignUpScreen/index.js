import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {getBottomSpace} from 'react-native-iphone-x-helper';

import Colors from '../../contents/color';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, marginBottom: getBottomSpace(), backgroundColor: 'red'}}>
        <View style={styles.container}>
          <Text> SignUpScreen </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const screenOptions = ({navigation, route}) => {
  return {};
};

export default SignUpScreen;
