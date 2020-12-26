import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> HomeScreen </Text>
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
  const routeName = getFocusedRouteNameFromRoute(route);
  let _title = 'Home';
  switch (routeName) {
    case 'Home':
      _title = 'Home';
      break;
    case 'Saved':
      _title = 'Saved';
      break;
    case 'Search':
      _title = 'Search';
      break;
    case 'Alarm':
      _title = 'Alarm';
      break;
    case 'Profile':
      _title = 'Profile';
      break;
  }
  return {
    title: _title,
  };
};

export default HomeScreen;
