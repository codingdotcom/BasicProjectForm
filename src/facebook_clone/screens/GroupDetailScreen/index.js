import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Dimensions, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';

import Animated, {Easing} from 'react-native-reanimated';

import List from './components/list';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../contants/color';

const width = Dimensions.get('screen').width;

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
  },
];

const NAVI_BAR_HEIGHT = 58;

const TOTAL_HEIGHT = 500;
const MIN_HEIGHT = 230;

const HEADER_SCROLL_DISTANCE = TOTAL_HEIGHT - MIN_HEIGHT;

class GroupDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      refreshing: false,
      title: '',
      headerImage: '',
    };

    this._scroll_Y = new Animated.Value(0);

    // this.Search = createRef();
  }

  // onFocus = () => {
  //   this.Search.current._onFocus();
  // };

  render() {
    const _header_opacity = this._scroll_Y.interpolate({
      inputRange: [MIN_HEIGHT, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        {/* <SearchScreen ref={this.Search} /> */}
        <View
          style={[
            styles.header,
            {
              height: NAVI_BAR_HEIGHT,
            },
          ]}>
          <TouchableWithoutFeedback
            style={{}}
            activeOpacity={1}
            onPress={() => {
              this.props.navigation.pop();
            }}>
            <Ionicons name="chevron-back" size={28} />
          </TouchableWithoutFeedback>
          <View style={{alignItems: 'flex-start', alignSelf: 'center', flex: 1, marginLeft: 20}}>
            <Animated.View
              style={{
                ...styles.row,
                alignItems: 'center',
                opacity: _header_opacity,
              }}>
              <Image source={require('../../assets/macbokpro.jpg')} style={{width: 38, height: 38, borderRadius: 8}} />
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={{flex: 1, fontSize: 18, marginLeft: 10, marginRight: 10}}>
                리액트 네이티브[React Naitve] 한국 사용자 그룹
              </Text>
            </Animated.View>
          </View>
          <View style={[styles.row]}>
            <TouchableOpacity style={{...styles.headerButton, backgroundColor: 'white'}} activeOpacity={0.8} onPress={() => {}}>
              <Ionicons name="ios-search" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.headerButton, backgroundColor: 'white'}} activeOpacity={0.8} onPress={() => {}}>
              <Entypo name="dots-three-horizontal" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={this.state.items}
          numColumns={1}
          renderScrollComponent={(props) => (
            <Animated.ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingTop: NAVI_BAR_HEIGHT}}
              bounces={false}
              bouncesZoom={false}
              alwaysBounceVertical={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: this._scroll_Y,
                      },
                    },
                  },
                ],
                {useNativeDriver: true},
              )}
            />
          )}
          scrollEventThrottle={16}
          ListHeaderComponent={this.ListHeader}
          ItemSeparatorComponent={this.ItemSeparator}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
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
      <>
        <Image source={require('../../assets/story4.jpg')} resizeMode={'cover'} style={{flex: 1, width, height: 200}} />
        <View style={{paddingHorizontal: 16, paddingVertical: 0, paddingTop: 16}}>
          <TouchableOpacity>
            <View style={{...styles.row, alignItems: 'flex-end'}}>
              <Text numberOfLines={2} style={{fontSize: 18, fontWeight: '800'}}>
                리액트 네이티브[React Native] 한국 사용자 그룹 리액트 네이티브[React Native]
              </Text>
              {/* <AntDesign name="right" size={16} /> */}
            </View>
          </TouchableOpacity>
          <View style={{height: 25, backgroundColor: 'white', justifyContent: 'center'}}>
            <View style={{...styles.row, alignItems: 'center'}}>
              <Entypo name="globe" size={14} color="#747476" />
              <Text style={{fontSize: 13, fontWeight: '300', color: '#747476', marginLeft: 5}}>전체 공개 그룹</Text>
              <Entypo name="dot-single" size={12} color="#747476" />
              <Text style={{fontSize: 13, fontWeight: '300', color: '#747476'}}>멤버</Text>
              <Text style={{fontSize: 15, fontWeight: '500', color: Colors.black}}>5.5천</Text>
              <Text style={{fontSize: 13, fontWeight: '300', color: '#747476'}}>명</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flex: 1, flexDirection: 'row', marginRight: 10, width: '100%'}}>
              <Image
                source={require('../../assets/user/user2.jpg')}
                style={{position: 'relative', width: 36, height: 36, borderRadius: 36 / 2, borderWidth: 3, borderColor: Colors.lightgrey_bg}}
              />
              <Image
                source={require('../../assets/user/user3.jpg')}
                style={{
                  position: 'relative',
                  marginLeft: -8,
                  width: 36,
                  height: 36,
                  borderRadius: 36 / 2,
                  borderWidth: 3,
                  borderColor: Colors.lightgrey_bg,
                }}
              />
              <Image
                source={require('../../assets/user/user3.jpg')}
                style={{
                  position: 'relative',
                  marginLeft: -8,
                  width: 36,
                  height: 36,
                  borderRadius: 36 / 2,
                  borderWidth: 3,
                  borderColor: Colors.lightgrey_bg,
                }}
              />
              <Image
                source={require('../../assets/user/user2.jpg')}
                style={{
                  position: 'relative',
                  marginLeft: -8,
                  width: 36,
                  height: 36,
                  borderRadius: 36 / 2,
                  borderWidth: 3,
                  borderColor: Colors.lightgrey_bg,
                }}
              />
              <Image
                source={require('../../assets/user/user1.jpg')}
                style={{
                  position: 'relative',
                  marginLeft: -8,
                  width: 36,
                  height: 36,
                  borderRadius: 36 / 2,
                  borderWidth: 3,
                  borderColor: Colors.lightgrey_bg,
                }}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 40, backgroundColor: Colors.facebook}}>
              <Text style={{color: Colors.white, fontSize: 16}}>초대</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1, height: 50, flexDirection: 'row', width: width, paddingVertical: 10}}>
          <ScrollView contentContainerStyle={{paddingHorizontal: 16}} horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>영상톡 모임 및 채팅</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>사진</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>이벤트</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>파일</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>사진첩</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>주제</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{height: 9, backgroundColor: Colors.lightgrey_bg}} />
        <TouchableOpacity>
          <View style={{paddingHorizontal: 16, paddingVertical: 10, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/user/user1.jpg')}
              style={{
                width: 42,
                height: 42,
                borderRadius: 21,
                marginRight: 10,
              }}
            />
            <Text>전체 공개 게시물 만들기...</Text>
          </View>
        </TouchableOpacity>

        <View style={{height: 2, backgroundColor: Colors.lightgrey_bg}} />
        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name="ios-videocam" size={22} color="#f44337" />
            <Text style={styles.menuText}>라이브</Text>
          </View>
          <View style={{alignSelf: 'center', width: 1, height: 26, backgroundColor: Colors.lightgrey_1}} />
          <View style={styles.menu}>
            <MaterialIcon name="photo-library" size={20} color="#4caf50" />
            <Text style={styles.menuText}>사진</Text>
          </View>
          <View style={{alignSelf: 'center', width: 1, height: 26, backgroundColor: Colors.lightgrey_1}} />
          <View style={styles.menu}>
            <MateriaCommunityIcon name="video-plus" size={22} color="#e141fc" />
            <Text style={styles.menuText}>추천하기</Text>
          </View>
          <View />
        </View>
        <View style={{height: 5, backgroundColor: Colors.lightgrey_bg}} />

        <View style={{...styles.row, paddingHorizontal: 16, paddingVertical: 10}}>
          <FontAwesome name="trash" size={32} color={Colors.facebook} />
          <View style={{flex: 1, marginRight: 10, marginLeft: 15}}>
            <Text>주제를 숨겼습니다.</Text>
            <Text numberOfLines={2} style={{flexWrap: 'wrap', marginTop: 3, fontSize: 12, fontWeight: '200'}}>
              주제가 더 이상 그룹 토론의 상단에 표시되지 않지만 주제 탭에서 계속 찾을 수 있습니다.
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{width: 60, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: Colors.facebook}}>
            <Text style={{color: Colors.white, fontSize: 14}}>취소</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={{...styles.row, justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 10}}>
            <Text style={{fontSize: 18}}>인기 주제</Text>
            <TouchableOpacity activeOpacity={0.8} style={{width: 50, height: 35, alignItems: 'center', justifyContent: 'center'}}>
              <AntDesign name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{paddingHorizontal: 16, height: 30}} horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <Text style={{...styles.categoryText, color: Colors.bigtext}}>React Native</Text>
            </TouchableOpacity>
          </ScrollView>

          <TouchableOpacity
            activeOpacity={0.8}
            style={{...styles.categoryButton, marginHorizontal: 16, marginVertical: 16, height: 38, borderRadius: 8, backgroundColor: '#E5E5E5'}}>
            <Text style={{...styles.categoryText, color: Colors.bigtext}}>모두보기</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.row,
            justifyContent: 'space-between',
            height: 42,
            paddingHorizontal: 16,
            backgroundColor: Colors.lightgrey,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14}}>새 활동</Text>
          <TouchableOpacity activeOpacity={0.8} style={{}}>
            <Text style={{color: Colors.bigtext}}>정렬</Text>
          </TouchableOpacity>
        </View>
      </>
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
    return <List mData={item} />;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerButton: {
    width: 42,
    height: 42,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 6,
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // width,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 9999,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
  menuText: {
    marginLeft: 11,
    fontWeight: '500',
    fontSize: 12,
  },
  categoryContainer: {
    width,
    backgroundColor: 'white',
    height: 50,
    paddingVertical: 10,
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
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default GroupDetailScreen;
