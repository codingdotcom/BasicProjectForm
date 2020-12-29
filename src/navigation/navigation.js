import React, {useContext, useEffect, useMemo, useReducer, useState} from 'react';
import {View, Image, Dimensions, Platform, Text} from 'react-native';
import colors from '../contents/color';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AuthContext} from '../components/Context';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LoadingScreen from '../screens/LoadingScreen';
import SplashScreen from '../screens/SplashScreen';

import LogInScreen, {screenOptions as loginOptions} from '../screens/LogInScreen';
import SignUpScreen, {screenOptions as signupOptions} from '../screens/SignUpScreen';
import FindIdScreen, {screenOptions as findidOptions} from '../screens/FindIdScreen';
import FindPwdScreen, {screenOptions as findpwdOptions} from '../screens/FindPwdScreen';
import HomeScreen, {screenOptions as homeOptions} from '../screens/HomeScreen';
import SavedScreen, {screenOptions as savedOptions} from '../screens/SavedScreen';
import AlarmScreen, {screenOptions as alarmOptions} from '../screens/AlarmScreen';
import SearchScreen, {screenOptions as searchOptions} from '../screens/SearchScreen';
import ProfileScreen, {screenOptions as profileOptions} from '../screens/ProfileScreen';

const widthWindow = Dimensions.get('window').width;
const iconSize = 24;

const screenContainer = ({children}) => <View style={{flex: 1}}>{children}</View>;

/* 유저 인증 후 진입 */
export const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    logIn: () => {
      setUserToken('asdf');
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('asdf');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      {userToken !== null ? (
        <MainTopHomeStac.Navigator screenOptions={LineScreenOptions}>
          <MainTopHomeStac.Screen name="Home" component={MainTopNavi} options={homeOptions} />
        </MainTopHomeStac.Navigator>
      ) : (
        <LogInScreen />
      )}
    </AuthContext.Provider>
  );
};

/* 로그인 화면 */
const LoginStack = createStackNavigator();
export const Login = () => {};

/* 메인 홈 (top tab tab) 스택 */
const MainTopHomeStac = createStackNavigator();
export const MainTobHomeStackNavi = () => {
  return (
    <MainTopHomeStac.Navigator screenOptions={LineScreenOptions}>
      <MainTopHomeStac.Screen name="Home" component={MainTopNavi} options={homeOptions} />
    </MainTopHomeStac.Navigator>
  );
};

/* 메인 홈 (bottom tab) 스택 */
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

/* 메인 홈 top tab 네비 */
const HomeTopNavigator = createMaterialTopTabNavigator();
export const MainTopNavi = () => {
  return (
    <HomeTopNavigator.Navigator initialRouteName="Home" tabBarOptions={tabBarTopNaviOption} swipeEnabled={true} tabBarPosition="bottom">
      <HomeTopNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="home" color={color} size={iconSize} />,
        }}
      />
      <HomeTopNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="save" color={color} size={iconSize} />,
        }}
      />
      <HomeTopNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="search1" color={color} size={iconSize} />,
        }}
      />
      <HomeTopNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color, size}) => <Ionicons name="alarm-outline" color={color} size={iconSize} />,
        }}
      />
      <HomeTopNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="profile" color={color} size={iconSize} />,
        }}
      />
    </HomeTopNavigator.Navigator>
  );
};

const defaultScreenOptions = {
  headerTitleAlign: 'center',

  headerStyle: {
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
};

const LineScreenOptions = {
  headerTitleAlign: 'center',

  headerStyle: {
    shadowColor: 'transparent',
    borderBottomWidth: 0.5,
    elevation: 0.5,
  },
};

const tabBarTopNaviOption = {
  activeTintColor: colors.activityiconcolor,
  inactiveTintColor: colors.inactivityiconcolor,
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
    borderColor: colors.bottomlinecolor,
    borderTopWidth: 0.5,
    elevation: 0.5,
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
