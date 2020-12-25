import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class AlarmScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> AlarmScreen </Text>
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

export default AlarmScreen;
