import React from 'react';
import {Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/native';

import Colors from '../../contants/color';

import LogInScreen from '../screens/LoginScreen';
import LoginDetailScreen from '../screens/LoginDetailScreen';
import SignupScreen from '../screens/SignupScreen';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwdScreen from '../screens/FindPwdScreen';

import GroupDetailScreen from '../../facebook_clone/screens/GroupDetailScreen';

import {MainHomeStackNavigation} from '../navigation/BottomMenu';

const widthWindow = Dimensions.get('window').width;
const iconSize = 24;

/************************************************************************/
//
// 로그인 스택
//
/************************************************************************/
const loginStack = createStackNavigator();
export default loginRouter = () => {
  return (
    <loginStack.Navigator
      initialRouteName="Login"
      screenOptions={LineScreenOptions}
      options={defaultOptions}
      headerMode="float"
      headerLayoutPreset="center">
      <loginStack.Screen name="Login" component={LogInScreen} options={{title: '로그인 인트로', headerShown: false}} />
      <loginStack.Screen name="LoginDetail" component={LoginDetailScreen} options={{title: '로그인', headerShown: false}} />
      <loginStack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: '회원가입',
          // headerTitleAlign: 'left',
          headerShown: true,
          // headerLeft: () => {
          //   return null;
          // },
          headerStyle: {
            backgroundColor: Colors.secondary_2,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <loginStack.Screen
        name="FindId"
        component={FindIdScreen}
        options={{
          title: '아이디 찾기',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.secondary_2,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <loginStack.Screen
        name="FindPwd"
        component={FindPwdScreen}
        options={{
          title: '비밀번호 찾기',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.secondary_2,
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <loginStack.Screen
        name="Home"
        component={MainHomeStackNavigation}
        options={{
          headerShown: false,
        }}
      />
    </loginStack.Navigator>
  );
};

const LineScreenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: 'black',
  headerLeftContainerStyle: {
    marginLeft: 10,
  },
  headerStyle: {
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
  style: {
    // height: 90,
    // shadowColor: 'transparent',
    // borderColor: Colors.bottomlinecolor,
    // borderTopWidth: 0,
    // elevation: 0,
  },
};

const tabBarTopNaviOption = {
  activeTintColor: Colors.activityiconcolor,
  inactiveTintColor: Colors.inactivityiconcolor,
  pressOpacity: 1,
  width: '100%',
  // backgroundColor: 'red',
  pressColor: 'transparent',
  labelStyle: {fontSize: 11, textTransform: 'none'},
  showIcon: true,
  showLabel: false,
  tabStyle: {width: widthWindow / 6},
  scrollEnabled: false,
  indicatorStyle: {
    top: 0,
    height: 2,
    width: (widthWindow / 6) * 0.85,
    marginLeft: 5,
    marginRight: 5,
  },
  style: {
    height: 50,
    padding: 0,
    shadowColor: 'transparent',
    borderColor: Colors.bottomlinecolor,
    borderTopWidth: 0,
    elevation: 0,
  },
};

const defaultOptions = {
  headerStyle: {
    // shadowOffset: {x: 0, y: 0},
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
};
