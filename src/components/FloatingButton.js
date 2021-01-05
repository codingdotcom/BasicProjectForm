import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, TouchableWithoutFeedback, Dimensions, Modal} from 'react-native';
import Colors from '../contants/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ClosableModal from 'rn-closable-modal';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: 0,
    };
  }

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

  componentDidMount() {
    // console.log('didmount');
  }

  render() {
    // console.log('render');
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
        <View style={{position: 'absolute', backgroundColor: 'blue', bottom: 80, right: 50}}>
          <TouchableWithoutFeedback onPress={this.props.btnLink}>
            <Animated.View style={[styles.button, styles.secondary, linkStyle, {opacity: opacity}]}>
              <AntDesign name="link" size={20} color="#f02a4b" />
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.props.btnContacts}>
            <Animated.View style={[styles.button, styles.secondary, contactStyle, {opacity: opacity}]}>
              <AntDesign name="contacts" size={20} color="#f02a4b" />
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={this.props.btnPhone}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    zIndex: 0,
  },
});

export default FloatingButton;
