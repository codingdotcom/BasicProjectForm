import React, {Component, createRef} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, TouchableOpacity, FlatList, VirtualizedList, Dimensions, Text, ScrollView} from 'react-native';

import Colors from '../../../contants/color';
import VideoItem from './components/VideoItem';

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

class GroupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      refreshing: false,
    };
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
          <Text style={[styles.title]}> 게임 </Text>
          <View style={[styles.row]}>
            <Button activeOpacity={0.7}>
              <Entypo name="user" size={24} />
            </Button>
            <Button activeOpacity={0.7} onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </Button>
          </View>
        </View>

        <View style={[styles.categoryContainer]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.8} style={[styles.categoryButton, {marginLeft: 16}]}>
              <View style={styles.row}>
                <FontAwesome name="plus-square" color={Colors.white} size={16} />
                <Text style={styles.categoryText}>회원님을 위한 추천</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="gamepad-square" color={Colors.bigtext} size={22} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>플레이</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="play-circle" color={Colors.bigtext} size={18} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>동영상</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
              <View style={styles.row}>
                <MateriaCommunityIcon name="account-group" color={Colors.bigtext} size={18} />
                <Text style={{...styles.categoryText, color: Colors.bigtext}}>커뮤니티</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <FlatList
          data={this.state.items}
          numColumns={1}
          scrollEventThrottle={16}
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
    paddingVertical: 8,
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

export default GroupScreen;
