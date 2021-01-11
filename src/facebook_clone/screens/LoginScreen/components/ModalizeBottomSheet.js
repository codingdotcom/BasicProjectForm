import React, {Component, createRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Modalize} from 'react-native-modalize';

import Colors from '../../../../contants/color';

class ModalizeBottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.modalizeRef = createRef();
  }

  onOpen = () => {
    this.modalizeRef.current?.open();
  };

  onClose = () => {
    this.modalizeRef.current.close();
  };

  render() {
    return (
      <Modalize
        ref={this.modalizeRef}
        snapPoint={320}
        modalHeight={320}
        HeaderComponent={
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
              <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold', color: Colors.bigtext}}>다른 방법으로 로그인하기</Text>
            </View>
            <TouchableOpacity style={{position: 'absolute', right: 10, top: 7, padding: 20}} activeOpacity={0.8} onPress={this.onClose}>
              <View>
                <AntDesign name="close" color={Colors.black} size={24} />
              </View>
            </TouchableOpacity>
          </View>
        }>
        <View style={styles.bottomNavigationView}>
          <TouchableOpacity
            style={{marginTop: 8}}
            activeOpacity={0.8}
            onPress={() => {
              this.props.btnFacebook();
            }}>
            <View style={styles.facebookBtnContainer}>
              <View style={styles.btnIcon}>
                <MaterialIcon name="facebook" color={Colors.white} size={24} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>페이스북으로 시작하기</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 10}}
            activeOpacity={0.8}
            onPress={() => {
              this.props.btnNaver();
            }}>
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
            onPress={() => {
              this.props.btnSignup();
            }}>
            <View style={styles.defalutBtnContainer}>
              <View style={styles.btnIcon}>
                <FontAwesome name="sign-in" color={Colors.black} size={24} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.text, {color: Colors.bigtext}]}>신규 회원가입 하기</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modalize>
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
    marginVertical: 10,
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

export default ModalizeBottomSheet;
