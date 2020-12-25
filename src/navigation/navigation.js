import React from 'react';
import {View, Image, Dimensions, Platform} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import HomeScreen from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import AlarmScreen from '../screens/AlarmScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

/* 메인 bottom 홈 스택 */
const MiainBottomTabNavigator = createBottomTabNavigator();
export const MainBottomTabNavi = () => {
  return (
    <MiainBottomTabNavigator.Navigator>
      <MiainBottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="home-outline" color={'black'} size={24} />
          ),
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="save" color={'black'} size={24} />
          ),
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="search1" color={'black'} size={24} />
          ),
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="alarm-outline" color={'black'} size={24} />
          ),
        }}
      />
      <MiainBottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="profile" color={'black'} size={24} />
          ),
        }}
      />
    </MiainBottomTabNavigator.Navigator>
  );
};

/* 메인 홈 스택 */
const MainHomeStack = createStackNavigator();
export const MainHomeStackNavi = () => {
  return (
    <MainHomeStack.Navigator>
      <MainHomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: 'Top Navigation'}}
      />
    </MainHomeStack.Navigator>
  );
};

/* 메인 홈 top 네비 */
const HomeTopNavigator = createMaterialTopTabNavigator();
export const HomeTopNavi = () => {
  return (
    <HomeTopNavigator.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#9C9C9C',
        labelStyle: {fontSize: 11, textTransform: 'none'},
        showIcon: true,
        showLabel: false,
        iconStyle: {
          ...Platform.select({
            ios: {
              height: 35,
              marginBottom: 0,
            },
          }),
        },
        style: {backgroundColor: 'white'},
        indicatorStyle: {
          backgroundColor: 'orange',
          borderTopColor: 'red',
          borderTopWidth: 5,
        },
      }}
      swipeEnabled={true}
      tabBarPosition="bottom">
      <HomeTopNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="home" color={'black'} size={24} />
          ),
        }}
      />
      <HomeTopNavigator.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="save" color={'black'} size={24} />
          ),
        }}
      />
      <HomeTopNavigator.Screen
        name="Search"
        component={AlarmScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="search1" color={'black'} size={24} />
          ),
        }}
      />
      <HomeTopNavigator.Screen
        name="Alarm"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Alarm',
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="alarm-outline" color={'black'} size={24} />
          ),
        }}
      />
      <HomeTopNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign name="profile" color={'black'} size={24} />
          ),
        }}
      />
    </HomeTopNavigator.Navigator>
  );
};
