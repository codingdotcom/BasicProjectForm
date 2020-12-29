import React, {Component} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import Colors from '../../contents/color';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.secondary} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
