import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class AlarmScreen extends Component {
  constructor(props) {
    super(props);
  }
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const screenOptions = ({navigation, route}) => {
  return {
    title: 'Alarm',
  };
};

export default AlarmScreen;
