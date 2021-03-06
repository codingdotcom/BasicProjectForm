import React, {Component, createRef} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, TouchableOpacity, FlatList, Dimensions, Text, ScrollView} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import Animated, {Value} from 'react-native-reanimated';

import Colors from '../../../contants/color';
import VideoItem from './components/VideoItem';
import ButtonGroupChoice from './components/ButtonGroupChoice';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import SearchScreen from '../SearchScreen';

const NAVI_BAR_HEIGHT = 58;
const CATEGORY_HEIGHT = 50;

const width = Dimensions.get('screen').width;

class WatchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // selectedIndex: 0,
      items: [],
      refreshing: false,
    };

    this._scroll_y = new Value(0);

    this.Search = createRef();
  }

  onFocus = () => {
    this.Search.current._onFocus();
  };

  render() {
    /***********************************************************************************************/
    //
    /***********************************************************************************************/

    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, NAVI_BAR_HEIGHT);
    const _category_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, NAVI_BAR_HEIGHT + CATEGORY_HEIGHT);

    const _header_height = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, NAVI_BAR_HEIGHT],
      outputRange: [NAVI_BAR_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    const _header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, NAVI_BAR_HEIGHT],
      outputRange: [0, -NAVI_BAR_HEIGHT],
      extrapolate: 'clamp',
    });

    const _header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, NAVI_BAR_HEIGHT * 0.7],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    /***********************************************************************************************/
    //
    /***********************************************************************************************/

    const _category_header_height = Animated.interpolate(_category_clamp_scroll_y, {
      inputRange: [0, CATEGORY_HEIGHT + NAVI_BAR_HEIGHT],
      outputRange: [CATEGORY_HEIGHT + NAVI_BAR_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    const _category_header_translate_y = Animated.interpolate(_category_clamp_scroll_y, {
      inputRange: [0, CATEGORY_HEIGHT],
      outputRange: [0, -CATEGORY_HEIGHT],
      extrapolate: 'clamp',
    });

    const _category_header_opacity = Animated.interpolate(_category_clamp_scroll_y, {
      inputRange: [0, (NAVI_BAR_HEIGHT + CATEGORY_HEIGHT) * 0.5],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
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
          <Text style={[styles.title]}> Watch </Text>
          <View style={[styles.row]}>
            <Button activeOpacity={0.7}>
              <Entypo name="user" size={24} />
            </Button>
            <Button activeOpacity={0.7} onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </Button>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.categoryContainer,
            {
              paddingTop: NAVI_BAR_HEIGHT,
              // height: _category_header_height,
              transform: [{translateY: _category_header_translate_y}],
              opacity: _category_header_opacity,
            },
          ]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ButtonGroupChoice />
          </ScrollView>
        </Animated.View>

        <FlatList
          data={this.state.items}
          numColumns={1}
          // contentContainerStyle={{paddingTop: NAVI_BAR_HEIGHT + CATEGORY_HEIGHT}}
          scrollEventThrottle={16}
          extraData={this.state}
          // refreshing={this.state.refreshing}
          renderScrollComponent={(props) => (
            <Animated.ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingTop: NAVI_BAR_HEIGHT + CATEGORY_HEIGHT}}
              bounces={false}
              bouncesZoom={false}
              alwaysBounceVertical={false}
              scrollEventThrottle={1}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: this._scroll_y,
                      },
                    },
                  },
                ],
                {useNativeDriver: true},
              )}
            />
          )}
          ListHeaderComponent={this.ListHeader}
          ItemSeparatorComponent={this.ItemSeparator}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{}}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  componentDidMount = () => {
    this.setState({
      items: listItem,
    });
  };

  //플랫 리스트 헤더
  ListHeader = () => {
    return (
      <View
        style={{
          height: 9,
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#f0f2f5',
        }}
      />
    );
  };

  //플랫 리스트 구분선 추가
  ItemSeparator = () => {
    return (
      <View
        style={{
          height: 9,
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#f0f2f5',
        }}
      />
    );
  };

  //플랫리스트 렌더 아이템(등록한 상품들)
  renderItem = ({item}) => {
    return <VideoItem mData={item} />;
  };
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
  categoryContainer: {
    width,
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 99,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Colors.facebook,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  categoryText: {
    marginLeft: 6,
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  scroll_view: {
    flex: 1,
  },
});

const listItem = [
  {
    avataUri: require('../../assets/user/user1.jpg'),
    name: 'jupiter',
    uploadTime: '10분전',
    post:
      'Happy, lovely, new year everyone!! Angelwwiong is hosting an online international Texh Recruitong Day. Happy, lovely, new year everyone!! Angelwwiong is hosting an online international Texh Recruitong Day. Happy, lovely, new year everyone!! Angelwwiong is hosting an online international Texh Recruitong Day.',
    photo: require('../../assets/story1.jpg'),
    totalLike: '190개',
    comment: '댓글 20개',
    share: '공유 103회',
    viewCount: '조회 17만회',
  },

  {
    avataUri: require('../../assets/user/user2.jpg'),
    name: '나만 알고 있는 영상',
    uploadTime: '10분전',
    post: '자동차 만들려고 1년동안 콜라만 마심 괴짜 외국인',
    photo: require('../../assets/story2.jpg'),
    totalLike: '10개',
    comment: '댓글 9개',
    share: '공유 15회',
    viewCount: '조회 12만회',
  },

  {
    avataUri: require('../../assets/user/user3.jpg'),
    name: '비디오 머그',
    uploadTime: '2020년 12월 30일',
    post: '논란의 논리왕 주차장 길막러...?',
    photo: require('../../assets/story3.jpg'),
    totalLike: '499개',
    comment: '댓글 200개',
    share: '공유 44회',
    viewCount: '조회 28.1만회',
  },

  {
    avataUri: require('../../assets/user/user4.jpg'),
    name: 'DADA Pick - 다다픽',
    uploadTime: 'Sponsored',
    post: '3차 리오더 - 카본블랙 컬러 재입고',
    photo: require('../../assets/story4.jpg'),
    totalLike: '499개',
    comment: '댓글 200개',
    share: '공유 44회',
    viewCount: '조회 28.1만회',
  },
];

export default WatchScreen;
