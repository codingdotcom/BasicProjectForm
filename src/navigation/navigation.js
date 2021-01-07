import React from 'react';
import {View, Image, Dimensions, Platform, Text, TouchableWithoutFeedback, Button} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Provider as PaperProvider} from 'react-native-paper';

import Colors from '../contants/color';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer, getFocusedRouteNameFromRoute, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import LoadingScreen from '../screens/LoadingScreen';
import SplashScreen from '../screens/SplashScreen';

import HomeScreen, {navigationOptions as homeOptions} from '../screens/HomeScreen';
import SavedScreen from '../screens/SavedScreen';
import AlarmScreen from '../screens/AlarmScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedDetailScreen from '../screens/SavedDetail';

import LogInScreen, {screenOptions as loginOptions} from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import FindIdScreen from '../screens/FindIdScreen';
import FindPwdScreen from '../screens/FindPwdScreen';

import {FABGroup, FABdefault} from '../components/FABModal';

const widthWindow = Dimensions.get('window').width;
const iconSize = 24;

/************************************************************************/
//
// 전체 네비게이션
//
/************************************************************************/
const allStack = createStackNavigator();
export const AllStackNavigation = () => {
  return (
    <allStack.Navigator screenOptions={{headerBackTitleVisible: false, headerTintColor: 'black'}}>
      <allStack.Screen name="Login" component={LogInScreen} options={{title: '로그인', headerShown: false}} />
      <allStack.Screen name="SignUp" component={SignUpScreen} options={{title: '회원가입', headerShown: true}} />
      <allStack.Screen name="FindId" component={FindIdScreen} options={{title: '아이디 찾기', headerShown: true}} />
      <allStack.Screen name="FindPwd" component={FindPwdScreen} options={{title: '비밀번호 찾기', headerShown: true}} />
      <allStack.Screen name="Home" component={MainHomeStackNavigation} options={{headerShown: false}} />
      <allStack.Screen name="SavedDetail" component={SavedDetailScreen} options={{headerShown: false}} />
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
  // console.log('1', navigation);
  // console.log('2', route);
  return (
    <SafeAreaView forceInset={{top: 'never'}} style={{flex: 1, backgroundColor: Colors.white}}>
      <MainHomeStack.Navigator screenOptions={LineScreenOptions}>
        <MainHomeStack.Screen
          name="Home"
          component={MainHomeNavigation}
          options={homeOptions} /*options={{headerRight: () => <Button title="setting" />}}*/
        />
      </MainHomeStack.Navigator>
    </SafeAreaView>
  );
};

const MainHomeTopNavigator = createMaterialTopTabNavigator();

//FAB 버튼 클릭 시 이동
const HomeOnPress1 = () => {
  console.log('home1');
};

const HomeOnPress2 = () => {
  console.log('home2');
};

const HomeOnPress3 = () => {
  console.log('home3');
};

export const MainHomeNavigation = ({route}) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const isFocused = useIsFocused();

  // console.log('=>', routeName);
  // console.log('1=>', props);

  //FAB Icon Change
  let OpenAfterIcon = '';
  let OpenBeforeIcon = '';
  let actions = {};

  let homeIconArr = ['pencil', 'pencil'];
  let hOmeColorArr = [Colors.tomato, Colors.primary];
  let HomeTempArr = [HomeOnPress1, HomeOnPress2];

  const HomeAacitonList = [];
  for (let i = 0; i < homeIconArr.length; i++) {
    HomeAacitonList.push({icon: homeIconArr[i], color: hOmeColorArr[i], onPress: HomeTempArr[i]});
  }

  let AlarmIconArr = ['barcode', 'barcode', 'barcode'];
  let AlarmColorArr = [Colors.tomato, Colors.primary, Colors.primary];
  let AlarmTempArr = [HomeOnPress1, HomeOnPress2, HomeOnPress3];

  const AlarmActionList = [];
  for (let i = 0; i < AlarmIconArr.length; i++) {
    AlarmActionList.push({icon: AlarmIconArr[i], color: AlarmColorArr[i], onPress: AlarmTempArr[i]});
  }

  //FAB Visiable
  let visiable = false;

  if (routeName === 'Home') {
    visiable = true;
  } else if (routeName === 'Alarm') {
    visiable = true;
  }

  switch (routeName) {
    case 'Home':
      OpenAfterIcon = 'info';
      OpenBeforeIcon = 'home';
      actions = HomeAacitonList;
      break;

    default:
      OpenAfterIcon = 'inbox';
      OpenBeforeIcon = 'headphones';
      actions = AlarmActionList;
      break;
  }

  return (
    <>
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
      <FABGroup visible={(isFocused, visiable)} OpenBeforeIcon={OpenBeforeIcon} OpenAfterIcon={OpenAfterIcon} actions={actions} />
    </>
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
  headerBackTitleVisible: false,
  headerTintColor: 'black',
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
