import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/native';

import Colors from '../../contants/color';
import PaperModal from './Components/PaperModal';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const routeName = this.props.route.name;

    console.log('route', routeName);

    let isView = false;
    if (routeName === 'Home') {
      isView = true;
    } else {
      isView = false;
    }
    console.log('Name', isView);
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text> HomeScreen </Text>
        </View>
        {/* <PaperModal visiable={isView} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let visiable = 0;

export const screenOptions = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  let _title = 'Home';
  switch (routeName) {
    case 'Home':
      visiable = 1;
      _title = 'Home';
      break;
    case 'Saved':
      visiable = 2;
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
