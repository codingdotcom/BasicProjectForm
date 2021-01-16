import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import Animated, {Easing} from 'react-native-reanimated';

import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ToolBar from './ToolBar';
import Users from './Users';
import Story from './Story';
import Feed from './Feed';

const {Value, timing} = Animated;

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._scroll_y = new Value(0);
  }
  render() {
    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 58);

    const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 58],
      outputRange: [58, 0],
      extrapolate: 'clamp',
    });

    const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 58],
      outputRange: [0, -58],
      extrapolate: 'clamp',
    });

    const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 58],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <>
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
            <Button>
              <Ionicons name="ios-search" size={24} />
            </Button>
            <Button>
              <Micon name="facebook-messenger" size={24} />
            </Button>
          </Row>
        </Animated.View>
        <Animated.ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event([
            {
              nativeEvent: {contentOffset: {y: this._scroll_y}},
            },
          ])}>
          {/* <ToolBar />
          <Users />
          <Story />
          <Feed /> */}
        </Animated.ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    flex: 1,
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
});

const Container = styled(Animated.View)`
  width: 100%;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  background-color: #ffffff;
  justify-content: space-between;
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

export default AppBar;
