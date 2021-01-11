import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions, KeyboardAvoidingView, Platform} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../contants/color';

import {Input, Button, Icon} from 'react-native-elements';

const widthWindow = Dimensions.get('window').width;

class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      id: '',
      password: '',
      passwordcConfirm: '',
      born: '',
      phoneNumber: '',
      phoneNumberConfirm: '',
      zipCode: '',
      address: '',
      addressDetail: '',
    };

    this.idTextInputRef = React.createRef();
    this.passwordTextInputRef = React.createRef();
    this.passwordConfirmTextInputRef = React.createRef();
    this.bornTextInputRef = React.createRef();
    this.phoneNumber = React.createRef();
    this.phoneNumberConfirm = React.createRef();
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.secondary_2}}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={false}
          enableOnAndroid
          enableAutomaticScroll={Platform.OS === 'ios'}
          contentContainerStyle={{flex: 1}}
          extraHeight={120}>
          <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true}>
            <View style={styles.container}>
              <Input
                label={'이름'}
                placeholder="이름을 입력해 주세요."
                onSubmitEditing={() => {
                  this.idTextInputRef.current.focus();
                }}
                returnKeyType="next"
                labelStyle={styles.labelText}
                errorStyle={styles.errorText}
                keyboardType={'default'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({name: value})}
              />

              <Input
                label={'아이디'}
                placeholder="이메일을 입력해주세요."
                ref={this.idTextInputRef}
                onSubmitEditing={() => {
                  this.passwordTextInputRef.current.focus();
                }}
                returnKeyType="next"
                labelStyle={styles.labelText}
                errorStyle={styles.errorText}
                keyboardType={'email-address'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({id: value})}
              />
              <Input
                label={'비밀번호'}
                placeholder="비밀번호를 입력해주세요."
                ref={this.passwordTextInputRef}
                onSubmitEditing={() => {
                  this.passwordConfirmTextInputRef.current.focus();
                }}
                returnKeyType="next"
                errorStyle={styles.errorText}
                labelStyle={styles.labelText}
                secureTextEntry={true}
                keyboardType={'default'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({password: value})}
              />

              <Input
                label={'비밀번호 재입력'}
                placeholder="비밀번호를 입력해주세요."
                ref={this.passwordConfirmTextInputRef}
                onSubmitEditing={() => {
                  this.bornTextInputRef.current.focus();
                }}
                returnKeyType="next"
                errorStyle={styles.errorText}
                labelStyle={styles.labelText}
                secureTextEntry={true}
                keyboardType={'default'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({passwordcConfirm: value})}
              />
              <Input
                label={'생년월일'}
                placeholder="ex) 20210101"
                ref={this.bornTextInputRef}
                onSubmitEditing={() => {
                  this.phoneNumber.current.focus();
                }}
                returnKeyType="next"
                errorStyle={styles.errorText}
                labelStyle={styles.labelText}
                keyboardType={'number-pad'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({born: value})}
              />
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Input
                  label={'휴대폰 번호'}
                  placeholder="ex) 01011112222"
                  ref={this.phoneNumber}
                  rnKeyType="retrrn"
                  errorStyle={styles.errorText}
                  labelStyle={styles.labelText}
                  keyboardType={'number-pad'}
                  containerStyle={{flex: 1}}
                  inputContainerStyle={[styles.inputContainerStyle]}
                  style={styles.inputText}
                  onChangeText={(value) => this.setState({phoneNumber: value})}
                />
                <Button
                  title="인증번호 전송"
                  activeOpacity={0.8}
                  titleStyle={{fontSize: 12, color: Colors.bigtext}}
                  containerStyle={{paddingRight: 20, marginTop: 15}}
                  buttonStyle={{backgroundColor: Colors.lightgrey, height: 50, width: 110, borderRadius: 25}}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Input
                  label={'인증번호 확인'}
                  placeholder="인증번호를 입력해 주세요."
                  errorStyle={styles.errorText}
                  labelStyle={styles.labelText}
                  keyboardType={'number-pad'}
                  containerStyle={{flex: 1}}
                  inputContainerStyle={[styles.inputContainerStyle]}
                  style={styles.inputText}
                  onChangeText={(value) => this.setState({phoneNumberConfirm: value})}
                />
                <Button
                  title="인증번호 확인"
                  activeOpacity={0.8}
                  titleStyle={{fontSize: 12, color: Colors.bigtext}}
                  containerStyle={{paddingRight: 20, marginTop: 15}}
                  buttonStyle={{backgroundColor: Colors.lightgrey, height: 50, width: 110, borderRadius: 25}}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Input
                  label={'주소'}
                  placeholder="우편번호"
                  errorStyle={styles.errorText}
                  labelStyle={styles.labelText}
                  disabled={true}
                  keyboardType={'number-pad'}
                  containerStyle={{flex: 1}}
                  inputContainerStyle={[styles.inputContainerStyle]}
                  style={styles.inputText}
                  onChangeText={(value) => this.setState({address: value})}
                />
                <Button
                  title="주소검색"
                  activeOpacity={0.8}
                  titleStyle={{fontSize: 12, color: Colors.bigtext}}
                  containerStyle={{paddingRight: 20, marginTop: 15}}
                  buttonStyle={{backgroundColor: Colors.lightgrey, height: 50, width: 110, borderRadius: 25}}
                />
              </View>

              <Input
                placeholder="주소"
                disabled={true}
                errorStyle={styles.errorText}
                labelStyle={styles.labelText}
                keyboardType={'default'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({born: value})}
              />
              <Input
                placeholder="상세주소를 입력해주세요."
                errorStyle={styles.errorText}
                labelStyle={styles.labelText}
                keyboardType={'default'}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({addressDetail: value})}
              />
            </View>

            <Button
              title="회원가입"
              activeOpacity={0.8}
              titleStyle={{fontSize: 18}}
              containerStyle={{flex: 1, width: widthWindow, paddingHorizontal: 15}}
              buttonStyle={{backgroundColor: Colors.primary, height: 58, borderRadius: 28, marginTop: 12, marginBottom: 20}}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: Colors.secondary_2,
    alignItems: 'flex-start',
  },
  errorText: {
    margin: 0,
    padding: 0,
  },
  labelText: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 25,
    alignSelf: 'flex-start',
    color: Colors.bigtext,
    fontSize: 14,
  },
  inputText: {
    fontSize: 14,
    // backgroundColor: 'red',
    color: Colors.bigtext,
  },
  inputContainerStyle: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    height: 50,
    marginHorizontal: 10,
    // backgroundColor: 'blue',
    borderColor: Colors.bigtext,
    borderRadius: 50,
    borderWidth: 1,
  },
  text: {
    alignSelf: 'center',
    fontSize: 14,
    color: Colors.black,
  },
});

export default SignupScreen;
