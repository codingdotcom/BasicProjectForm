import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, Dimensions, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../../../../contants/color';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {AccordionListSingle} from './AccordionListSingle';
import {AccordionListMulti} from './AccordionListMulti';

const width = Dimensions.get('screen').width;
const underlayColor = 'rgba(0, 0, 0, 0.1)';
export default class MenuList extends Component {
  spinValue = new Animated.Value(0);
  renderHeaderSingle = () => {
    const {headerCustom, headerText, row} = styles;
    return (
      <View style={[headerCustom, {backgroundColor: 'white'}]}>
        <View style={row}>
          <Image source={require('../../../assets/0_shapes.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
          <Text style={headerText}>더 보기</Text>
        </View>
      </View>
    );
  };

  renderHeaderSingle_1 = () => {
    const {headerCustom, headerText, row} = styles;
    return (
      <View style={headerCustom}>
        <View style={row}>
          <Image source={require('../../../assets/help-web-button.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
          <Text style={headerText}>도움말 및 지원</Text>
        </View>
      </View>
    );
  };

  renderHeaderSingle_2 = () => {
    const {headerCustom, headerText, row} = styles;
    return (
      <View style={headerCustom}>
        <View style={row}>
          <Image source={require('../../../assets/settings.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
          <Text style={headerText}>설정과 공개범위</Text>
        </View>
      </View>
    );
  };

  renderHeaderSingle_3 = () => {
    const {headerCustom, headerText, row} = styles;
    return (
      <View style={headerCustom}>
        <View style={row}>
          <Image source={require('../../../assets/shipping.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
          <Text style={headerText}>다른 Facebook 제품</Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    // this.refMultiCollapsible.isMultipleSelect(true);
  }

  changeStatusSingle = () => {
    this.refSingleCollapsible.toggleExpanded();
  };

  render() {
    const {container, content, collapsingCustom, row, cardText, card} = styles;

    return (
      <>
        <View style={container}>
          {/* {*****************************************************************************} */}
          {/* {*****************************************************************************} */}
          <AccordionListSingle
            ref={(target) => (this.refSingleCollapsible = target)}
            // title="아코디언 싱글 리스트"
            collapsingCustom={collapsingCustom}
            renderHeader={this.renderHeaderSingle()}>
            <View style={content}>
              <TouchableHighlight
                onPress={() => {
                  console.log('최신글');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/4_pencil.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>최신글</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('안전');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/3_safety.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>재난 안전 확인</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('쿠폰');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/5_coupon.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>쿠폰</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('아바타');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/2_avatar.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>아바타</Text>
                </View>
              </TouchableHighlight>
            </View>
          </AccordionListSingle>
          {/* {*****************************************************************************} */}
          {/* {*****************************************************************************} */}
          <AccordionListSingle collapsingCustom={collapsingCustom} renderHeader={this.renderHeaderSingle_1()}>
            <View style={content}>
              <TouchableHighlight
                onPress={() => {
                  console.log('고객센터');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/headphone.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>고객센터</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('지원 관련 메시지함');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image
                    source={require('../../../assets/speech-bubble.png')}
                    style={{width: 24, height: 24, marginRight: 15}}
                    resizeMode="contain"
                  />
                  <Text style={cardText}>지원 관련 메시지함</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('쿠폰');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/problem.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>문제 신고</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('아바타');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/diary.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>약관과 정책</Text>
                </View>
              </TouchableHighlight>
            </View>
          </AccordionListSingle>
          {/* {*****************************************************************************} */}
          {/* {*****************************************************************************} */}
          <AccordionListSingle collapsingCustom={collapsingCustom} renderHeader={this.renderHeaderSingle_2()}>
            <View style={content}>
              <TouchableHighlight
                onPress={() => {
                  console.log('설정');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/profile-user.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>설정</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('공개 범위 설정 바로가기');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/lock.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>공개 범위 설정 바로가기</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('Facebook 이용시간');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/clock.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>Facebook 이용시간</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  console.log('기기 요청');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/phone.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>기기 요청</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  console.log('최근 광고');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/ad.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>최근 광고 활동</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  console.log('Fi');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/wifi-signal.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>Wi-Fi 찾기</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  console.log('다크');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/moon.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>다크 모드</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  console.log('앱 언어');
                }}
                underlayColor={underlayColor}
                style={card}>
                <View style={row}>
                  <Image source={require('../../../assets/globe.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
                  <Text style={cardText}>앱 언어</Text>
                </View>
              </TouchableHighlight>
            </View>
          </AccordionListSingle>
          {/* {*****************************************************************************} */}
          {/* {*****************************************************************************} */}
          <AccordionListSingle collapsingCustom={collapsingCustom} renderHeader={this.renderHeaderSingle_3()}>
            <View style={content}>
              <TouchableHighlight
                onPress={() => {
                  console.log('제품');
                }}
                underlayColor={underlayColor}
                style={{...card, paddingHorizontal: 0, paddingVertical: 0, width: 150, height: 150, overflow: 'hidden'}}>
                <View style={{}}>
                  <Image source={require('../../../assets/story2.jpg')} style={{flex: 0.5}} resizeMode="cover" />
                  <View style={{flex: 0.5, paddingHorizontal: 8, width: '100%'}}>
                    <Text style={{...cardText, marginTop: 10}}>Oculus</Text>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={{flexWrap: 'wrap', fontSize: 11}}>
                      VR 헤드셋을 통해 현실과 거리의 한계에 도전해 보세요.
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </AccordionListSingle>
        </View>
        <View style={{...content, padding: 0, height: 50}}>
          <TouchableHighlight
            onPress={() => {
              console.log('로그아웃');
            }}
            underlayColor={underlayColor}
            style={{paddingHorizontal: 20, height: '100%', justifyContent: 'center'}}>
            <View style={row}>
              <Image source={require('../../../assets/log-out.png')} style={{width: 24, height: 24, marginRight: 15}} resizeMode="contain" />
              <Text style={cardText}>로그아웃</Text>
            </View>
          </TouchableHighlight>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    padding: 15,
    backgroundColor: Colors.lightgrey_bg,
  },
  collapsingCustom: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.bottomlinecolor,
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  headerCustom: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 50,
    width,
    backgroundColor: Colors.lightgrey_bg,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    // backgroundColor: 'red',
    fontWeight: '500',
  },
  cardText: {
    fontSize: 16,
  },

  card: {
    height: 50,
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
    // elevation: 2,
  },
});
