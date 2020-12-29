import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import Colors from '../contents/color';

export const CustomButton = (props) => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 7,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0,
        shadowOffset: {height: 0, width: 0},
        shadowRadius: 0,
      },

      android: {
        elevation: 0,
      },
    }),
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'none',
    color: '#FFFFFF',
  },
});
