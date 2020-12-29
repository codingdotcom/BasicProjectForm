//https://medium.com/reactbrasil/react-native-setting-a-status-bar-background-color-on-android-and-ios-1cba14a4e3f9
import React from 'react';
import {View, StatusBar} from 'react-native';
import styles from '../styles/GeneralStatusBarColorStyles';

const GeneralStatusBarColor = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default GeneralStatusBarColor;
