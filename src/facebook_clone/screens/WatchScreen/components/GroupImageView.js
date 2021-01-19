import React, {Component, createRef} from 'react';

import {StyleSheet, TouchableHighlight, Image, View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import Colors from '../../../../contants/color';

const width = Dimensions.get('screen').width;
const GROUP_LIST_HEIGHT = 120;

class GroupImageView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <View style={{flex: 1, marginRight: 12}}>
          <TouchableHighlight
            onPress={this.props.onPress}
            // activeOpacity={0.8}
            underlayColor="transparent"
            style={{backgroundColor: Colors.lightgrey_1, width: GROUP_LIST_HEIGHT * 0.8, height: '100%', borderRadius: 10, overflow: 'hidden'}}>
            <Image source={this.props.source} resizeMode="cover" style={{width: '100%', height: '100%'}} />
          </TouchableHighlight>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              position: 'absolute',
              bottom: 5,
              alignSelf: 'center',
              fontWeight: '400',
              color: Colors.white,
              fontSize: 11,
              shadowOpacity: 1,
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 1},
              shadowRadius: 1,
              elevation: 1,
            }}>
            {this.props.title}
          </Text>
        </View>
      </>
    );
  }
}

export default GroupImageView;
