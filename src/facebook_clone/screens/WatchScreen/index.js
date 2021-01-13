import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class WatchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> WatchScreen </Text>
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

export default WatchScreen;
