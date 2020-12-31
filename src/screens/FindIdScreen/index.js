import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import GlobalStyle from '../../styles/stylesGlobal';
import Colors from '../../contants/color';

class FindIdScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={GlobalStyle.bottomSafeArea}>
          <View style={styles.container}>
            <Text> findid screen </Text>
          </View>
        </View>
      </SafeAreaView>
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
