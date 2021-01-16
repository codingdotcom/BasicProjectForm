import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, FlatList, Animated, TouchableOpacity, Image, Dimensions, StatusBar, ScrollView, Platform} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Colors from '../../../contants/color';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomSheet from './components/bottomSheet';
import ModalizeBottomSheet from './components/ModalizeBottomSheet';

import FlatlistAnimation from './exFlatlistAnimation';

const width = Dimensions.get('window').width;

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.bottomSheetModalRef = createRef();
    this.modal = createRef();
  }

  componentDidMount() {}

  btnFacebook = () => {
    console.log('face');
    this.modal.current.onClose();
  };

  btnNaver = () => {
    console.log('naver');
    this.modal.current.onClose();
  };

  btnSignup = () => {
    this.props.navigation.push('SignUp');
    this.modal.current.onClose();
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ModalizeBottomSheet ref={this.modal} btnFacebook={this.btnFacebook} btnNaver={this.btnNaver} btnSignup={this.btnSignup} />

        {/* <StatusBar hidden /> */}
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{marginTop: Platform.OS === 'ios' ? 0 : 20}}>
          <View style={styles.container}>
            <FlatlistAnimation style={{flex: 0.3}} />
            <View style={{flex: 0.7, paddingHorizontal: 30, marginTop: 40}}>
              <TouchableOpacity style={{marginTop: 0}} activeOpacity={0.8}>
                <View style={styles.kakaoBtnContainer}>
                  <View style={styles.btnIcon}>
                    <Image style={{width: 26, height: 26}} source={require('../../assets/kakao_logo_360.png')} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>카카오톡으로 로그인</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 10}} activeOpacity={0.8}>
                <View style={styles.appleBtnContainer}>
                  <View style={styles.btnIcon}>
                    <MaterialIcon name="apple" color={Colors.black} size={24} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>Apple로 로그인</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 10}}
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.push('LoginDetail');
                }}>
                <View style={styles.defalutBtnContainer}>
                  <View style={styles.btnIcon}>
                    <FontAwesome name="user" color={Colors.black} size={24} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>기존 회원 로그인</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 50, padding: 15}}
                activeOpacity={0.8}
                onPress={() => {
                  this.modal.current.onOpen();
                }}>
                <Text style={[styles.text, {color: Colors.subtext, fontSize: 13}]}>다른 방법으로 로그인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  kakaoBtnContainer: {
    backgroundColor: Colors.kakao,
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
  },
  appleBtnContainer: {
    borderWidth: 1,
    borderColor: Colors.bigtext,
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
  },
  defalutBtnContainer: {
    borderWidth: 1,
    borderColor: Colors.bigtext,
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 28,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 15,
    width: '84%',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.black,
  },
});

export default LoginScreen;
