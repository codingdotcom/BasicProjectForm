import React, {Component, createRef} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, TouchableOpacity, FlatList, VirtualizedList, Dimensions, Text, ScrollView} from 'react-native';

import Colors from '../../../contants/color';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import SearchScreen from '../SearchScreen';

const NAVI_BAR_HEIGHT = 58;

const width = Dimensions.get('screen').width;

class AlarmScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.Search = createRef();
  }

  onFocus = () => {
    this.Search.current._onFocus();
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchScreen ref={this.Search} />
        <View
          style={[
            styles.header,
            {
              height: NAVI_BAR_HEIGHT,
            },
          ]}>
          <Text style={[styles.title]}> 알림 </Text>
          <View style={[styles.row]}>
            <Button activeOpacity={0.7} onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </Button>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount = () => {};
}

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: Colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  header: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    // zIndex: 999,
  },
  scroll_view: {
    flex: 1,
  },
});

export default AlarmScreen;
