import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from '../contants/color';

const ScreenContainer = ({children}) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenContainer;
