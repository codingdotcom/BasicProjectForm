import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class GroupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> GroupScreen </Text>
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

export default GroupScreen;
