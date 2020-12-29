import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, Platform, StatusBar} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../contents/color';
import SafeAreaPadding from '../../styles/SafeAreaPadding';
import {CustomButton} from '../../components/CustomButton';
import SeparatorView from '../../components/SeparatorView';
import {ScrollView} from 'react-native-gesture-handler';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

class LogInScreen extends Component {
  constructor(props) {
    super(props);

    this.passwordTextInputRef = React.createRef();
    this.addressTextInputRef = React.createRef();
    this.phonenumberTextInputRef = React.createRef();

    this.state = {
      checked: false,
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    // this.props.logout();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
        <View style={{flex: 1, backgroundColor: Colors.primary}}>
          <Text style={styles.text}>Welcom!</Text>
          <ScrollView contentContainerStyle={{paddingVertical: 30}} style={[styles.loginContainer]}>
            <TextInput
              style={[styles.textinput]}
              onSubmitEditing={() => {
                this.passwordTextInputRef.current.focus();
              }}
              placeholder={'아이디(Email)'}
              returnKeyType="next"
              keyboardType="email-address"
              secureTextEntry={false}
              autoCapitalize="none"
              blurOnSubmit={false}
            />
            <TextInput
              ref={this.passwordTextInputRef}
              onSubmitEditing={() => {
                this.addressTextInputRef.current.focus();
              }}
              style={styles.textinput}
              placeholder={'비밀번호(Password)'}
              returnKeyType="next"
              keyboardType="default"
              secureTextEntry={true}
              autoCapitalize="none"
              blurOnSubmit={false}
            />
            <TextInput
              ref={this.addressTextInputRef}
              onSubmitEditing={() => {
                this.phonenumberTextInputRef.current.focus();
              }}
              style={styles.textinput}
              placeholder={'주소'}
              returnKeyType="next"
              keyboardType="default"
              autoCapitalize="none"
              blurOnSubmit={false}
            />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />
            <TextInput ref={this.phonenumberTextInputRef} style={styles.textinput} blurOnSubmit={false} placeholder={'휴대폰번호(01011112222)'} returnKeyType="done" multiline={false} keyboardType="phone-pad" autoCapitalize="none" />

            <CheckBox
              activeOpacity={1}
              right
              containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', padding: 0, margin: 0, marginBottom: 10}}
              textStyle={{fontWeight: '600', padding: 0, margin: 0}}
              iconType="material"
              checkedIcon="check-box"
              uncheckedIcon="check-box-outline-blank"
              checkedColor={Colors.primary}
              title="자동 로그인"
              checked={this.state.checked}
              onPress={() => this.setState({checked: !this.state.checked})}
            />

            <CustomButton
              style={{marginBottom: 20}}
              title="로그인"
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}
            />
            <View style={{flexDirection: 'row', width: '100%', marginBottom: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SignUp');
                }}>
                <Text>회원가입</Text>
              </TouchableOpacity>
              <SeparatorView style={{marginHorizontal: 10}} />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('FindId');
                }}>
                <Text>아이디 찾기</Text>
              </TouchableOpacity>
              <SeparatorView style={{marginHorizontal: 10}} />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('FindPwd');
                }}>
                <Text>비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: Colors.bigtext, marginBottom: 10}}>간편 로그인</Text>
            <CustomButton style={{backgroundColor: Colors.kakao}} textStyle={{color: Colors.bigtext}} title="카카오 로그인" />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  loginContainer: {
    width: widthWindow,
    height: heightWindow,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: Colors.secondary_2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text: {
    // flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: 10,
    color: 'white',
    marginLeft: 20,
  },
  textinput: {
    width: '100%',
    height: 50,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
    marginBottom: 10,
  },
});

export default LogInScreen;
