import React from 'react';
import {Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {createStackNavigator} from '@react-navigation/stack';

import Colors from '../../contants/color';

import LogInScreen from '../screens/LoginScreen';
import LoginDetailScreen from '../screens/LoginDetailScreen';
import SignupScreen from '../screens/SignupScreen';

const widthWindow = Dimensions.get('window').width;

const loginStack = createStackNavigator();
export default loginRouter = () => {
  return (
    <loginStack.Navigator initialRouteName="Login" screenOptions={LineScreenOptions}>
      <loginStack.Screen name="Login" component={LogInScreen} options={{title: '로그인 인트로', headerShown: false}} />
      <loginStack.Screen name="LoginDetail" component={LoginDetailScreen} options={{title: '로그인', headerShown: false}} />
      <loginStack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: '회원가입',
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.secondary_2,
            shadowOffset: {x: 0, y: 0},
            shadowColor: 'transparent',
            borderBottomWidth: 0.5,
            elevation: 0,
          },
        }}
      />
    </loginStack.Navigator>
  );
};

const LineScreenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerTintColor: 'black',
  shadowColor: 'transparent',
  borderTopWidth: 0,
  elevation: 0,
  headerLeftContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
  headerStyle: {
    shadowOffset: {x: 0, y: 0},
    shadowColor: 'transparent',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
  style: {
    shadowOffset: {x: 0, y: 0},
    shadowColor: 'transparent',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
};

const defaultOptions = {
  headerStyle: {
    shadowOffset: {x: 0, y: 0},
    shadowColor: 'transparent',
    borderBottomWidth: 0.5,
    elevation: 0,
  },
};
