import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> MenuScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuScreen;
