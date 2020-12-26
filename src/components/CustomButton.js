import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 3,
      },

      android: {
        elevation: 4,
      },
    }),
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
