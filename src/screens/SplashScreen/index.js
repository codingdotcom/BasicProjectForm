import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import color from '../../contents/color';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: color.secondary, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/image/splash.png')} resizeMode="contain" />
      </View>
    );
  }
}

export default SplashScreen;
