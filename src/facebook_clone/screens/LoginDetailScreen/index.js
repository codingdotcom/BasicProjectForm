import React, {Component} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, View, Text, StatusBar, TouchableOpacity, Platform, ScrollView} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components';

import Colors from '../../../contants/color';

import {Input, Button, Icon} from 'react-native-elements';

const topHeight = getStatusBarHeight();

// console.log(topHeight);

class LoginDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.secondary_2}}>
        <View style={styles.container}>
          <ScrollView bounces={false} style={{flex: 1, width: '100%'}}>
            <View style={styles.inputContainer}>
              <Text style={styles.infotText}>로그인 후 다양한{'\n'}혜택을 누려보세요.</Text>
              <Input
                placeholder="이메일을 입력해주세요."
                leftIcon={{type: 'font-awesome', name: 'user-circle-o', color: Colors.bigtext}}
                keyboardType={'email-address'}
                // blurOnSubmit={false}
                autoCapitalize="none"
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.inputText}
                onChangeText={(value) => this.setState({email: value})}
              />

              <Input
                placeholder="비밀번호를 입력해주세요."
                secureTextEntry={true}
                leftIcon={{type: 'font-awesome', name: 'lock', color: Colors.bigtext}}
                keyboardType={'default'}
                // blurOnSubmit={false}
                autoCapitalize="none"
                inputContainerStyle={[styles.inputContainerStyle, {paddingLeft: 25}]}
                style={[styles.inputText, {marginLeft: 18}]}
                onChangeText={(value) => this.setState({email: value})}
              />
              <Button
                title="로그인"
                activeOpacity={0.8}
                titleStyle={{fontSize: 18}}
                containerStyle={{width: '93%'}}
                onPress={() => {
                  this.props.navigation.push('Home');
                }}
                buttonStyle={{backgroundColor: Colors.primary, height: 58, borderRadius: 28}}
              />

              <Row>
                <TouchableOpacity
                  style={{padding: 8}}
                  activeOpacity={0.8}
                  onPress={() => {
                    this.props.navigation.push('FindId');
                  }}>
                  <Text style={[styles.text, {color: Colors.subtext, fontSize: 13}]}>아이디 찾기</Text>
                </TouchableOpacity>
                <Separator />
                <TouchableOpacity
                  style={{padding: 8}}
                  activeOpacity={0.8}
                  onPress={() => {
                    this.props.navigation.push('FindPwd');
                  }}>
                  <Text style={[styles.text, {color: Colors.subtext, fontSize: 13}]}>비밀번호 찾기</Text>
                </TouchableOpacity>
              </Row>

              <TouchableOpacity
                style={{padding: 15}}
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.push('SignUp');
                }}>
                <Text style={[styles.text, {color: Colors.subtext, fontSize: 13}]}>계정이 없으신가요?</Text>
                <Text style={[styles.text, {color: Colors.subtext, fontSize: 13, fontWeight: 'bold'}]}>회원가입하러 가기</Text>
              </TouchableOpacity>
            </View>

            <Button
              onPress={() => {
                this.props.navigation.goBack();
              }}
              icon={<Icon name="close" size={14} color="white" />}
              containerStyle={{position: 'absolute', right: 30, top: Platform.OS === 'ios' ? topHeight : 10}}
              activeOpacity={0.9}
              buttonStyle={{backgroundColor: Colors.secondary, height: 30, width: 30, borderRadius: 20}}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Separator = styled.View`
  width: 1px;
  height: 12px;
  margin-left: 5px;
  margin-right: 5px;
  background: #aaaaaa;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary_2,
    alignItems: 'center',
  },
  infotText: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 20,
    color: Colors.bigtext,
  },
  inputContainer: {
    width: '100%',
    marginTop: '10%',
    // paddingVertical: 20,
    // paddingHorizontal: 20,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  inputText: {
    marginLeft: 14,
    fontSize: 14,
    // backgroundColor: 'red',
    color: Colors.bigtext,
  },
  inputContainerStyle: {
    paddingHorizontal: 20,
    height: 60,
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

export default LoginDetailScreen;
