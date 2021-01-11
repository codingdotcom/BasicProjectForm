import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, Alert} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Colors from '../../../../contants/color';

import {BottomSheet} from 'react-native-btr';

class bottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  _hideModal = () => {
    this.setState({visible: false});
  };

  toggle = () => this.setState({visible: !this.state.visible});

  render() {
    return (
      <View style={styles.container}>
        <BottomSheet visible={this.state.visible} onBackButtonPress={this._hideModal} onBackdropPress={this._hideModal}>
          <View style={styles.bottomNavigationView}>
            <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 15}}>다른 방법으로 로그인</Text>
            <TouchableOpacity style={{marginTop: 8}} activeOpacity={0.8} onPress={(this.props.btnFacebook, this._hideModal)}>
              <View style={styles.facebookBtnContainer}>
                <View style={styles.btnIcon}>
                  <MaterialIcon name="facebook" color={Colors.white} size={24} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>페이스북으로 시작하기</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10}} activeOpacity={0.8} onPress={(this.props.btnNaver, this._hideModal)}>
              <View style={styles.naverBtnContainer}>
                <View style={styles.btnIcon}>
                  <Image style={{width: 28, height: 28}} source={require('../../../assets/naver.png')} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>네이버로 시작하기</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 10}}
              activeOpacity={0.8}
              onPress={
                (() => {
                  this.props.btnSignUp;
                },
                this._hideModal)
              }>
              <View style={styles.defalutBtnContainer}>
                <View style={styles.btnIcon}>
                  <FontAwesome name="sign-in" color={Colors.black} size={24} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={[styles.text, {color: Colors.bigtext}]}>신규 회원가입 하기</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 10, position: 'absolute', right: 20, padding: 10}} activeOpacity={0.8} onPress={this._hideModal}>
              <View>
                <AntDesign name="close" color={Colors.black} size={24} />
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.white,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 15,
    width: '84%',
    justifyContent: 'center',
  },
  btnIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 320,
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  facebookBtnContainer: {
    backgroundColor: Colors.facebook,
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
  naverBtnContainer: {
    backgroundColor: Colors.naver,
    borderRadius: 25,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 25,
  },
});

export default bottomSheet;
