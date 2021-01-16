import React, {Component} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View, TouchableOpacity, Text, SafeAreaView} from 'react-native';

import Colors from '../../contants/color';

import Animated, {Easing} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {Value, timing} = Animated;

const width = Dimensions.get('screen').width;

class CustomAppbarUpDownAnimation extends Component {
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
        <SafeAreaView style={[styles.safe_area_view, {backgroundColor: this.props.safeAreaBgColor ? this.props.safeAreaBgColor : Colors.white}]}>
          <Animated.View
            style={[
              styles.header,
              {
                height: _header_height,
                transform: [{translateY: _header_translate_y}],
                opacity: _header_opacity,
                backgroundColor: this.props.headerColor ? this.props.headerColor : Colors.red,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{backgroundColor: 'white', paddingTop: 8, paddingBottom: 8, paddingRight: 7, paddingLeft: 8}}
              onPress={() => {
                this.props.backBtn;
              }}>
              <Ionicons name="chevron-back" size={26} color={this.props.color3} />
            </TouchableOpacity>
            <Text style={this.props.style}> {this.props.title ? this.props.title : 'title'} </Text>
            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{backgroundColor: 'black', marginRight: 10, padding: 8}}
                onPress={() => {
                  this.props.btnRightIcon2;
                }}>
                <Image source={this.props.source} resizeMode={'contain'} style={this.props.style} />
                <Ionicons name="chevron-back-circle" size={this.props.size1} color={this.props.color1} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{backgroundColor: 'black', padding: 8}}
                onPress={() => {
                  this.props.btnRightIcon1;
                }}>
                <Image source={this.props.source} resizeMode={'contain'} style={this.props.style} />
                <Ionicons name="chevron-back-circle" size={this.props.size1} color={this.props.color1} />
              </TouchableOpacity>
            </View>
          </Animated.View>
          <Animated.ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {y: this._scroll_y}},
              },
            ])}>
            {this.props.children}
          </Animated.ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
  },
  header: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16,
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
  row: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomAppbarUpDownAnimation;
