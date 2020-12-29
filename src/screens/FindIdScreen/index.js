import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {getBottomSpace} from 'react-native-iphone-x-helper';

class FindIdScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, marginBottom: getBottomSpace(), backgroundColor: 'red'}}>
        <View style={styles.container}>
          <Text> findid screen </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const screenOptions = ({navigation, route}) => {
  return {};
};

export default FindIdScreen;
