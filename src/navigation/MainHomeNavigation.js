import React from 'react';
import {View, Image, Dimensions, Platform, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../contants/color';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen, {screenOptions as homeOptions} from '../screens/HomeScreen';
import SavedScreen, {screenOptions as savedOptions} from '../screens/SavedScreen';
import AlarmScreen, {screenOptions as alarmOptions} from '../screens/AlarmScreen';
import SearchScreen, {screenOptions as searchOptions} from '../screens/SearchScreen';
import ProfileScreen, {screenOptions as profileOptions} from '../screens/ProfileScreen';

const widthWindow = Dimensions.get('window').width;
const iconSize = 24;

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

/* 메인 홈 top tab 네비 */
const MainHomeTopNavigator = createMaterialTopTabNavigator();
export const MainHomeNavigation = () => {
  return (
    <MainHomeTopNavigator.Navigator initialRouteName="Home" tabBarOptions={tabBarTopNaviOption} swipeEnabled={true} tabBarPosition="bottom">
      <MainHomeTopNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="home" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="save" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="search1" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color, size}) => <Ionicons name="alarm-outline" color={color} size={iconSize} />,
        }}
      />
      <MainHomeTopNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => <AntDesign name="profile" color={color} size={iconSize} />,
        }}
      />
    </MainHomeTopNavigator.Navigator>
  );
};

/* Home Stack */

/* Saved Stack */

/* Search Stack */

/* Alarm Stack*/

/* Profile Stack*/

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
