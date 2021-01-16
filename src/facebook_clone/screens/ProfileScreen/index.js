import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, VirtualizedList, Dimensions, ScrollView} from 'react-native';

import Animated, {
  event,
  diffClamp,
  multiply,
  interpolate,
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

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../contants/color';

import SearchScreen from '../SearchScreen';
import GroupImageView from '../WatchScreen/components/GroupImageView';

const width = Dimensions.get('screen').width;

const NAVI_BAR_HEIGHT = 58;
const CATEGORY_HEIGHT = 50;
const GROUP_LIST_HEIGHT = 120;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      refreshing: false,
    };

    this._scroll_y = new Animated.Value(0);

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
              // transform: [{translateY: _header_translate_y}],
              // opacity: _header_opacity,
            },
          ]}>
          <Text style={[styles.title]}> 그룹 </Text>
          <View style={[styles.row]}>
            <TouchableOpacity style={styles.headerButton} activeOpacity={0.7} onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </TouchableOpacity>
          </View>
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
          // renderItem={this.renderItem}
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
        <View>
          <View style={[styles.categoryContainer]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, marginLeft: 16, backgroundColor: '#E5E5E5'}}>
                <View style={styles.row}>
                  <MateriaCommunityIcon name="account-group" color={Colors.bigtext} size={18} />
                  <Text style={{...styles.categoryText, color: Colors.bigtext}}>내 그룹</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
                <View style={styles.row}>
                  <FontAwesome5 name="compass" color={Colors.bigtext} size={18} />
                  <Text style={{...styles.categoryText, color: Colors.bigtext}}>찾아보기</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
                <View style={styles.row}>
                  <MateriaCommunityIcon name="plus-circle" color={Colors.bigtext} size={18} />
                  <Text style={{...styles.categoryText, color: Colors.bigtext}}>만들기</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8} style={{...styles.categoryButton, backgroundColor: '#E5E5E5'}}>
                <View style={styles.row}>
                  <Ionicons name="ios-settings-sharp" color={Colors.bigtext} size={18} />
                  <Text style={{...styles.categoryText, color: Colors.bigtext}}>설정</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={{width, height: GROUP_LIST_HEIGHT, backgroundColor: Colors.white}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 16, paddingBottom: 16, paddingTop: 6}}>
            <GroupImageView source={require('../../assets/macbokpro.jpg')} title="맥쓰는 사람들" />
            <GroupImageView source={require('../../assets/reactnative.jpg')} title="리액트 네이티브(React Native) 공부하기" />
          </ScrollView>
        </View>
        <View
          style={{
            height: 9,
            width: '100%',
            alignSelf: 'center',
            backgroundColor: '#f0f2f5',
          }}
        />
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
    return <GroupListItem mData={item} />;
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
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
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
  categoryContainer: {
    width,
    backgroundColor: 'white',
    height: CATEGORY_HEIGHT,
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
    marginLeft: 6,
    alignSelf: 'center',
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
});

const listItem = [{}];

export default ProfileScreen;
