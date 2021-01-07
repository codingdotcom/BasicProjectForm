import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Platform} from 'react-native';
import {getFocusedRouteNameFromRoute, useNavigation} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DatePicker from '../../components/DatePicker';
import PaperModal from '../../components/PaperModal';

import Colors from '../../contants/color';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

class HomeScreen extends Component {
  init() {
    const {route, navigation} = this.props;
    navigation.setOptions({headerRigth: () => <Button />});
  }

  constructor(props) {
    super(props);

    this.pagerModalRef = createRef();
  }

  componentDidMount() {
    // this.init();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contents}>
          <Button title="Open Modal" onPress={() => this.pagerModalRef.current.setState({visible: true})} />

          <View>
            <PaperModal ref={this.pagerModalRef} />
          </View>
        </View>
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
  },
});

export const navigationOptions = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  // console.log(routeName);
  // console.log(navigation);

  let _title = 'Home';
  let _headerShown = true;

  let profileRightIcon = (
    <TouchableWithoutFeedback
      style={{paddingRight: Platform.OS === 'ios' ? 10 : 12}}
      onPress={() => {
        alert('aaaa');
      }}>
      <AntDesign name="setting" color={Colors.black} size={24} />
    </TouchableWithoutFeedback>
  );

  let hearderLeftIcon = undefined;
  let hearderRigthIcon = undefined;

  switch (routeName) {
    case 'Home':
      _title = 'Home';
      _headerShown = true;
      break;
    case 'Saved':
      _title = 'Saved';
      _headerShown = true;
      break;
    case 'Search':
      _title = 'Search';
      _headerShown = false;

      break;
    case 'Alarm':
      _title = 'Alarm';
      _headerShown = true;

      break;
    case 'Profile':
      _title = 'Profile';
      _headerShown = true;
      hearderRigthIcon = profileRightIcon;
      break;
  }
  return {
    title: _title,
    // headerLeft: () => {
    //   return hearderLeftIcon;
    // },
    headerRight: () => {
      return hearderRigthIcon;
    },
    headerShown: _headerShown,
  };
};

export default HomeScreen;
