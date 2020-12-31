import React from 'react';
import {View, Image, Dimensions, Platform, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Colors from '../contants/color';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LoadingScreen from '../screens/LoadingScreen';
import SplashScreen from '../screens/SplashScreen';

import HomeScreen, {screenOptions as homeOptions} from '../screens/HomeScreen';
import SavedScreen, {screenOptions as savedOptions} from '../screens/SavedScreen';
import AlarmScreen, {screenOptions as alarmOptions} from '../screens/AlarmScreen';
import SearchScreen, {screenOptions as searchOptions} from '../screens/SearchScreen';
import ProfileScreen, {screenOptions as profileOptions} from '../screens/ProfileScreen';

import LogInScreen, {screenOptions as loginOptions} from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwdScreen from '../screens/FindPwdScreen';

const widthWindow = Dimensions.get('screen').width;
const iconSize = 24;

/************************************************************************/
//
// 전체 네비게이션
//
/************************************************************************/
const allStack = createStackNavigator();
export const AllStackNavigation = () => {
  return (
    <allStack.Navigator>
      <allStack.Screen name="Login" component={LogInScreen} options={{title: '로그인', headerShown: false}} />
      <allStack.Screen name="SignUp" component={SignUpScreen} options={{title: '회원가입', headerShown: true}} />
      <allStack.Screen name="FindId" component={FindIdScreen} options={{title: '아이디 찾기', headerShown: true}} />
      <allStack.Screen name="FindPwd" component={FindPwdScreen} options={{title: '비밀번호 찾기', headerShown: true}} />
      <allStack.Screen name="Home" component={MainHomeStackNavigation} options={{headerShown: false}} />
    </allStack.Navigator>
  );
};

/************************************************************************/
//
// 메인 탭 메뉴 (메테리얼 Top Tab 활용)
//
/************************************************************************/
const MainHomeStack = createStackNavigator();
export const MainHomeStackNavigation = () => {
  return (
    <SafeAreaView forceInset={{top: 'never'}} style={{flex: 1, backgroundColor: Colors.red}}>
      <MainHomeStack.Navigator screenOptions={LineScreenOptions}>
        <MainHomeStack.Screen name="Home" component={MainHomeNavigation} options={homeOptions} />
      </MainHomeStack.Navigator>
    </SafeAreaView>
  );
};

const MainHomeTopNavigator = createMaterialTopTabNavigator();
export const MainHomeNavigation = () => {
  return (
    <MainHomeTopNavigator.Navigator tabBarOptions={tabBarTopNaviOption} swipeEnabled={true} tabBarPosition="bottom">
      <MainHomeTopNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="home" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Saved',
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="save" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          title: 'Search',
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="search1" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          title: 'Alarm',
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color, size}) => <Ionicons name="alarm-outline" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="profile" color={color} size={iconSize} />,
        }}
      />
    </MainHomeTopNavigator.Navigator>
  );
};

/************************************************************************/
//
// 메인 탭 메뉴 (기본 bottomTab)
//
/************************************************************************/
const MainBottomHomeStack = createStackNavigator();
export const MainBottomHomeStackNavi = () => {
  return (
    <MainBottomHomeStack.Navigator screenOptions={defaultScreenOptions}>
      <MainBottomHomeStack.Screen name="title" component={MainBottomTabNavi} options={homeOptions} />
    </MainBottomHomeStack.Navigator>
  );
};

/* 메인 홈 bottom 스택 */
const MiainBottomTabNavigator = createBottomTabNavigator();
export const MainBottomTabNavi = () => {
  return (
    <MiainBottomTabNavigator.Navigator initialRouteName="Home" tabBarOptions={tabBarOption}>
      <MiainBottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => <Ionicons name="home-outline" color={color} size={iconSize} />,
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color}) => <AntDesign name="save" color={color} size={iconSize} />,
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarBadge: 3,
          tabBarIcon: ({focused, color}) => <AntDesign name="search1" color={color} size={iconSize} />,
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color}) => <Ionicons name="alarm-outline" color={color} size={iconSize} />,
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => <AntDesign name="profile" color={color} size={iconSize} />,
        }}
      />
    </MiainBottomTabNavigator.Navigator>
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

const tabBarTopNaviOption = {
  activeTintColor: Colors.activityiconcolor,
  inactiveTintColor: Colors.inactivityiconcolor,
  pressOpacity: 1,
  pressColor: 'transparent',
  labelStyle: {fontSize: 11, textTransform: 'none'},
  showIcon: true,
  showLabel: true,
  // tabStyle: {width: 100},
  scrollEnabled: false,
  indicatorStyle: {
    top: 0,
    height: 2,
    width: widthWindow / 5 - 10,
    marginLeft: 5,
    marginRight: 5,
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

const tabBarOption = {
  activeTintColor: 'red',
  inactiveTintColor: 'blue',
  pressOpacity: 1,
  labelStyle: {fontSize: 11, textTransform: 'none'},
  showIcon: true,
  showLabel: true,
  tabStyle: {width: widthWindow / 5},
  scrollEnabled: false,

  style: {
    shadowColor: 'transparent',
    borderTopWidth: 0.5,
    elevation: 0.5,
  },
};
