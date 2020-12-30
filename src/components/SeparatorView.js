import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../contants/color';
import values from '../contants/size';

class SeparatorView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{...styles.sepatate, ...this.props.style}} />;
  }
}

const styles = StyleSheet.create({
  sepatate: {
    height: '50%',
    width: 1,
    backgroundColor: colors.bigtext,
  },
});

export default SeparatorView;
