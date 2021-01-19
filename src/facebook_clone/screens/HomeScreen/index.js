import React, {Component, createRef} from 'react';
import styled from 'styled-components/native';
import {ScrollView, StyleSheet, View, Platform, StatusBar} from 'react-native';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Animated, {Easing} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ToolBar from './components/ToolBar';
import Users from './components/Users';
import Story from './components/Story';
import Feed from './components/Feed';

import SearchScreen from '../SearchScreen';

const HEADER_HEIGHT = 58;

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    // this._scroll_y = createRef(new Animated.Value(0));

    this._scroll_y = new Animated.Value(0);
    this.Search = createRef();
  }

  onFocus = () => {
    // console.log('search');
    this.Search.current._onFocus();
  };
  render() {
    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, HEADER_HEIGHT);

    const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [HEADER_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    const headerHeight = this._scroll_y.interpolate({
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [HEADER_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
      extrapolate: 'clamp',
    });

    const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, HEADER_HEIGHT * 0.5],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <Container>
        {/* <StatusBar hidden /> */}
        <SearchScreen ref={this.Search} />
        <Animated.View
          style={[
            styles.header,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity,
            },
          ]}>
          <Text> facebook </Text>
          <Row>
            <Button onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </Button>
            <Button>
              <Micon name="facebook-messenger" size={24} />
            </Button>
          </Row>
        </Animated.View>
        <Animated.ScrollView
          style={{flex: 1}}
          contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          bounces={false}
          bouncesZoom={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: this._scroll_y}},
              },
            ],
            {
              useNativeDriver: false,
            },
          )}>
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </Animated.ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

const Container = styled.SafeAreaView`
  flex: 1;
  background: #ffffff;
`;

const Text = styled.Text`
  color: #3a86e9;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const navigationOptions = ({navigation, route}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  // console.log(routeName);
  // console.log(navigation);

  // let homeRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //     <RightIcon>
  //       <Micon name="facebook-messenger" size={24} />
  //     </RightIcon>
  //   </Row>
  // );

  // let watchRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <FontAwesome name="user" size={24} />
  //     </RightIcon>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //   </Row>
  // );

  // let groupRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //     {/* <RightIcon>
  //       <Micon name="facebook-messenger" size={24} />
  //     </RightIcon> */}
  //   </Row>
  // );

  // let gameRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <FontAwesome name="user" size={24} />
  //     </RightIcon>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //   </Row>
  // );

  // let alarmRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //   </Row>
  // );

  // let menuRightIcon = (
  //   <Row>
  //     <RightIcon>
  //       <Ionicons name="ios-search" size={24} />
  //     </RightIcon>
  //   </Row>
  // );

  let headerLeftIcon = undefined;
  let headerRigthIcon = undefined;
  let _title = 'Home';
  let _customHeader = '';

  switch (routeName) {
    case 'Home':
      // _title = <HomeText>facebook</HomeText>;
      // headerRigthIcon = homeRightIcon;
      // _customHeader = <AppBar />;

      break;

    case 'Watch':
      // _title = <Text>Watch</Text>;
      // headerRigthIcon = watchRightIcon;
      // _customHeader = <AppBar />;

      break;

    case 'Profile':
      // _title = <Text>그룹</Text>;
      // headerRigthIcon = groupRightIcon;
      // _customHeader = <AppBar />;

      break;

    case 'Group':
      // _title = <Text>게임</Text>;
      // headerRigthIcon = gameRightIcon;
      // _customHeader = <AppBar />;

      break;

    case 'Alarm':
      // _title = <Text>알림</Text>;
      // headerRigthIcon = alarmRightIcon;
      // _customHeader = <AppBar />;

      break;

    case 'Menu':
      // _title = <Text>메뉴</Text>;
      // headerRigthIcon = menuRightIcon;
      // _customHeader = <AppBar />;

      break;
  }

  return {
    title: _title,

    headerRight: () => {
      return headerRigthIcon;
    },

    header: () => {
      return _customHeader;
    },
  };
};

export default HomeScreen;
