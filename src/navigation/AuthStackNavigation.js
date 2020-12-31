import React from 'react';
import {View, Image, Dimensions, Platform, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../contants/color';

import {getFocusedRouteNameFromRoute, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import {MainHomeNavigation} from './MainHomeNavigation';

import LoadingScreen from '../screens/LoadingScreen';
import SplashScreen from '../screens/SplashScreen';

import LogInScreen, {screenOptions as loginOptions} from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwdScreen from '../screens/FindPwdScreen';

const loginStack = createStackNavigator();
export const LogInStackNavigation = () => {
  return (
    <>
      {/* <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}> */}
      <NavigationContainer>
        <loginStack.Navigator initialRouteName="Login" screenOptions={LineScreenOptions}>
          <loginStack.Screen name="Login" component={LogInScreen} options={{title: '로그인', headerShown: false}} />
          <loginStack.Screen name="SignUp" component={SignUpScreen} options={{title: '회원가입', headerShown: true}} />
          <loginStack.Screen name="FindId" component={FindIdScreen} options={{title: '아이디 찾기'}} />
          <loginStack.Screen name="FindPwd" component={FindPwdScreen} options={{title: '비밀번호 찾기'}} />
        </loginStack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
};

const MainHomeStack = createStackNavigator();
export const MainHomeStackNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainHomeStack.Navigator screenOptions={LineScreenOptions}>
          <MainHomeStack.Screen name="Home" component={MainHomeNavigation} options={homeOptions} />
        </MainHomeStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const LineScreenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    shadowColor: 'transparent',
    borderBottomWidth: 0.5,
    elevation: 0.5,
  },
  style: {
    // height: 70,
    shadowColor: 'transparent',
    borderColor: Colors.bottomlinecolor,
    borderTopWidth: 0.5,
    elevation: 0.5,
  },
};

const defaultScreenOptions = {
  headerTitleAlign: 'center',

  headerStyle: {
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
};
