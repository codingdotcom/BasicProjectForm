import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, TouchableWithoutFeedback} from 'react-native';
import Colors from '../contants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

class FloatingButton extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  };
  render() {
    const phoneStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70],
          }),
        },
      ],
    };

    const contactStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130],
          }),
        },
      ],
    };

    const linkStyle = {
      transform: [
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -190],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.button, styles.secondary, linkStyle, {opacity: opacity}]}>
            <AntDesign name="link" size={20} color="#f02a4b" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.button, styles.secondary, contactStyle, {opacity: opacity}]}>
            <AntDesign name="contacts" size={20} color="#f02a4b" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.onPress}>
          <Animated.View style={[styles.button, styles.secondary, phoneStyle, {opacity: opacity}]}>
            <AntDesign name="phone" size={20} color="#f02a4b" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu]}>
            <Animated.View style={rotation}>
              <AntDesign name="plus" size={24} color="#fff" />
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    elevation: 3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: Colors.red,
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
  },
});

export default FloatingButton;
