import React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../../contants/color';

import Header from '../screens/HomeScreen/components/AppBar';

import HomeScreen, {navigationOptions as homeOptions} from '../screens/HomeScreen';
import WatchScreen from '../screens/WatchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GroupScreen from '../screens/GroupScreen';
import AlarmScreen from '../screens/AlarmScreen';
import MenuScreen from '../screens/MenuScreen';

import SearchScreen from '../screens/SearchScreen';

const widthWindow = Dimensions.get('window').width;
const iconSize = 24;

// console.log('header', Header.HEIGHT);

const MainHomeStack = createStackNavigator();
export const MainHomeStackNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <MainHomeStack.Navigator headerMode="none" screenOptions={LineScreenOptions}>
        <MainHomeStack.Screen name="Home" component={MainHomeNavigation} options={homeOptions} />
      </MainHomeStack.Navigator>
    </SafeAreaView>
  );
};

const MainBottomMenu = createMaterialTopTabNavigator();

export const MainHomeNavigation = ({route}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const isFocused = useIsFocused();

  // console.log('=>', routeName);
  // console.log('1=>', props);

  return (
    <>
      <MainBottomMenu.Navigator
        tabBarOptions={tabBarTopNaviOption}
        swipeEnabled={true}
        tabBarPosition="bottom"
        headerMode="float"
        headerLayoutPreset="center">
        <MainBottomMenu.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'facebook',
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, color}) => <Micon name={focused ? 'home' : 'home-outline'} color={color} size={iconSize} />,
          }}
        />
        <MainBottomMenu.Screen
          name="Watch"
          component={WatchScreen}
          options={{
            title: 'Watch',
            tabBarLabel: 'Watch',
            tabBarIcon: ({focused, color, size}) => <Micon name={focused ? 'movie' : 'movie-outline'} color={color} size={iconSize} />,
          }}
        />
        <MainBottomMenu.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '프로필',
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, color, size}) => <FontAwesome name={focused ? 'user-circle' : 'user-circle-o'} color={color} size={iconSize} />,
          }}
        />
        <MainBottomMenu.Screen
          name="Group"
          component={GroupScreen}
          options={{
            title: '그룹',
            tabBarLabel: 'Group',
            tabBarIcon: ({focused, color, size}) => (
              <Micon name={focused ? 'gamepad-square' : 'gamepad-square-outline'} color={color} size={iconSize} />
            ),
          }}
        />
        <MainBottomMenu.Screen
          name="Alarm"
          component={AlarmScreen}
          options={{
            title: '알람',
            tabBarLabel: 'Alarm',
            tabBarIcon: ({focused, color, size}) => (
              <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={iconSize} />
            ),
          }}
          Micon
        />
        <MainBottomMenu.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: '메뉴',
            tabBarLabel: 'Menu',
            tabBarIcon: ({focused, color, size}) => <Ionicons name={focused ? 'menu' : 'menu-outline'} color={color} size={iconSize} />,
          }}
        />
      </MainBottomMenu.Navigator>
    </>
  );
};

const LineScreenOptions = {
  headerTitleAlign: 'center',

  headerBackTitleVisible: false,
  headerTintColor: 'black',
  headerTitleAlign: 'left',

  // headerLeftContainerStyle: {
  //   marginLeft: 10,
  // },
  headerRightContainerStyle: {
    marginRight: 20,
  },

  headerLeft: () => {
    return null;
  },
  headerStyle: {
    height: 110,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
  style: {
    // height: 80,
    shadowColor: 'transparent',
    borderColor: Colors.bottomlinecolor,
    borderTopWidth: 0,
    elevation: 0,
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
    borderTopWidth: 0.5,
    elevation: 0.5,
  },
};
