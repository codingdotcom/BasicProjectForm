import React, {Component, createRef} from 'react';
import {StyleSheet, View, TouchableOpacity, TouchableHighlight, FlatList, Dimensions, Text, Image, ScrollView} from 'react-native';

import Colors from '../../../contants/color';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import SearchScreen from '../SearchScreen';

const NAVI_BAR_HEIGHT = 58;

const width = Dimensions.get('screen').width;

class MenuScreen extends Component {
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
          <Text style={[styles.title]}> 메뉴 </Text>
          <View style={[styles.row]}>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={this.onFocus}>
              <Ionicons name="ios-search" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
            <TouchableOpacity activeOpacity={0.8} style={{paddingHorizontal: 16, paddingVertical: 8, width}}>
              <View style={styles.row}>
                <View style={{marginRight: 14}}>
                  <Image style={styles.profileImage} source={require('../../assets/user/user1.jpg')} />
                </View>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 18, color: Colors.bigtext, fontWeight: '600'}}>Jessica</Text>
                  <Text style={{fontSize: 12, color: Colors.bigtext}}>내 프로필 보기</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: 1, marginHorizontal: 16, backgroundColor: Colors.lightgrey_1}} />

          <View style={styles.row}>
            <View style={{flex: 0.5, paddingLeft: 16, paddingRight: 5, paddingVertical: 16, alignContent: 'center', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() => {
                  console.log('touch');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <Entypo name="shield" size={24} color="#E133FF" />
                  <Text style={styles.cardText}>코로나19 정보 센터</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('save');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <Entypo name="location" size={24} color="#186DFF" />
                  <Text style={styles.cardText}>저장됨</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('nearFriend');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <Entypo name="save" size={24} color="#FC6B6A" />
                  <Text style={styles.cardText}>근처에 있는 친구</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('group');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <FontAwesome name="group" size={22} color="#FD851A" />
                  <Text style={styles.cardText}>그룹</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('page');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <MateriaCommunityIcon name="page-layout-sidebar-right" size={24} color="#25FFF6" />
                  <Text style={styles.cardText}>페이지</Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={{flex: 0.5, paddingRight: 16, paddingLeft: 5, paddingVertical: 16, alignContent: 'center', justifyContent: 'center'}}>
              <TouchableHighlight
                onPress={() => {
                  console.log('touch');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <Entypo name="folder-video" size={24} color="#D30882" />
                  <Text style={styles.cardText}>Watch 동영상</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('save');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <FontAwesome name="shopping-bag" size={24} color="#2322BC" />
                  <Text style={styles.cardText}>채용정보</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('today');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <Entypo name="stopwatch" size={24} color="#FC6B6A" />
                  <Text style={styles.cardText}>과거의 오늘</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('event');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <FontAwesome name="calendar-check-o" size={22} color="#D45974" />
                  <Text style={styles.cardText}>이벤트</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('friends');
                }}
                underlayColor="rgba(0,0,0,0.3)"
                style={styles.card}>
                <View>
                  <FontAwesome5 name="user-friends" size={20} color="#16918B" />
                  <Text style={styles.cardText}>친구</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={{paddingHorizontal: 16, height: 50, backgroundColor: 'red', justifyContent: 'center'}}>
            <TouchableOpacity activeOpacity={1}>
              <Text>더 보기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

  componentDidMount = () => {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  row: {
    flexDirection: 'row',
  },

  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },

  title: {
    color: Colors.black,
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },

  header: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  card: {
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.lightgrey_1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 0},
    shadowColor: Colors.black,
    shadowRadius: 5,
    elevation: 2,
  },

  cardText: {
    marginTop: 5,
  },
});

export default MenuScreen;
