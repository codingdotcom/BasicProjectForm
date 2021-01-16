import React, {Component, createRef} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, TouchableOpacity, FlatList, Dimensions, Text, ScrollView} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import Animated, {
  event,
  diffClamp,
  multiply,
  interpolate,
  Value,
  timing,
  cond,
  set,
  add,
  startClock,
  clockRunning,
  stopClock,
  Clock,
  sub,
  lessThan,
  spring,
  neq,
  eq,
} from 'react-native-reanimated';

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
    // this.updateIndex = this.updateIndex.bind(this);

    this.Search = createRef();
  }

  // updateIndex(selectedIndex) {
  //   this.setState({selectedIndex});
  // }

  onFocus = () => {
    this.Search.current._onFocus();
  };

  //Button 모음
  btnMyRecommend = () => (
    <View style={styles.row}>
      <Entypo name="video" color={this.state.selectedIndex === 0 ? Colors.white : Colors.bigtext} size={16} />
      <Text style={{color: this.state.selectedIndex === 0 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>
        회원님을 위한 추천
      </Text>
    </View>
  );
  btnLive = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="video-account" color={this.state.selectedIndex === 1 ? Colors.white : Colors.bigtext} size={22} />
      <Text style={{color: this.state.selectedIndex === 1 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>라이브</Text>
    </View>
  );
  btnFollowing = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="folder-star-multiple" color={this.state.selectedIndex === 2 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 2 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>팔로잉</Text>
    </View>
  );
  btnFood = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="food-fork-drink" color={this.state.selectedIndex === 3 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 3 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>푸드</Text>
    </View>
  );

  btnGame = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="gamepad-up" color={this.state.selectedIndex === 4 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 4 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>게임</Text>
    </View>
  );

  render() {
    /***********************************************************************************************/
    //
    /***********************************************************************************************/

    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, NAVI_BAR_HEIGHT);

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
      inputRange: [0, 20],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const _diff_clamp_category_scroll_y = Animated.diffClamp(this._scroll_y, 0, CATEGORY_HEIGHT);

    const _category_header_height = Animated.interpolate(_diff_clamp_category_scroll_y, {
      inputRange: [0, CATEGORY_HEIGHT],
      outputRange: [CATEGORY_HEIGHT, 0],
      extrapolate: 'clamp',
    });

    const _category_header_translate_y = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, CATEGORY_HEIGHT],
      outputRange: [0, -CATEGORY_HEIGHT],
      extrapolate: 'clamp',
    });

    const _category_header_opacity = Animated.interpolate(_diff_clamp_scroll_y, {
      inputRange: [0, 20],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    /***********************************************************************************************/
    //
    /***********************************************************************************************/
    const buttons = [
      {element: this.btnMyRecommend},
      {element: this.btnLive},
      {element: this.btnFollowing},
      {element: this.btnFood},
      {element: this.btnGame},
    ];
    const {selectedIndex} = this.state;
    // console.log('index', selectedIndex);

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

        <View style={[styles.categoryContainer]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ButtonGroupChoice />
            {/* <ButtonGroup
              horizontal
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              selectedTextStyle={{}}
              selectedButtonStyle={{
                backgroundColor:
                  (selectedIndex === 0 && '#0D6CE0') ||
                  (selectedIndex === 1 && '#FB001B') ||
                  (selectedIndex === 2 && '#1EE64C') ||
                  (selectedIndex === 3 && '#32C914') ||
                  (selectedIndex === 4 && '#0E75DB'),
              }}
              innerBorderStyle={{width: 0, padding: 0, margin: 0}}
              buttonStyle={{paddingHorizontal: 13, borderRadius: 50, backgroundColor: '#E5E5E5'}}
              buttonContainerStyle={{paddingHorizontal: 5}}
              containerStyle={{paddingVertical: 5, borderWidth: 0}}
              activeOpacity={1}
            /> */}
            {/* <TouchableOpacity activeOpacity={0.8} style={[styles.categoryButton, {marginLeft: 16}]}>
              <View style={styles.row}>
                <Entypo name="video" color={Colors.white} size={16} />
                <Text style={styles.categoryText}>회원님을 위한 추천</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="video-account" color={Colors.bigtext} size={25} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>라이브</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="folder-star-multiple" color={Colors.bigtext} size={18} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>팔로잉</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="food-fork-drink" color={Colors.bigtext} size={18} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>푸드</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="gamepad-up" color={Colors.bigtext} size={18} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>게임</Text>
              </View>
            </TouchableOpacity> */}
          </ScrollView>
        </View>

        <FlatList
          data={this.state.items}
          numColumns={1}
          scrollEventThrottle={16}
          extraData={this.state}
          // refreshing={this.state.refreshing}
          renderScrollComponent={(props) => (
            <Animated.ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              bounces={false}
              scrollEventThrottle={1}
              // contentInset={{top: NAVI_BAR_HEIGHT}}
              // contentOffset={{y: -NAVI_BAR_HEIGHT}}
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
              // onScrollEndDrag={Animated.event(
              //   [
              //     {
              //       nativeEvent: {
              //         velocity: {
              //           y: this.scrollEndDragVelocity,
              //         },
              //       },
              //     },
              //   ],
              //   {useNativeDriver: true},
              // )}
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
    backgroundColor: 'white',
    height: CATEGORY_HEIGHT,
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    // paddingLeft: 10,
    // zIndex: -999,
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
