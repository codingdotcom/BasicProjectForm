import React, {Component, createRef} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import Colors from '../../../../contants/color';

const width = Dimensions.get('screen').width;
const GROUP_LIST_HEIGHT = 120;

class GroupListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const groupData = this.props.mData;
    return (
      <>
        <View style={{width, height: GROUP_LIST_HEIGHT, backgroundColor: 'orange'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 16, paddingVertical: 16}}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{backgroundColor: Colors.lightgrey_1, width: GROUP_LIST_HEIGHT * 0.8, height: '100%', borderRadius: 10}}>
                <Image source={groupData.imageUri} resizeMode="cover" style={{width: '100%', height: '100%'}} />
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  position: 'absolute',
                  bottom: 5,
                  alignSelf: 'center',
                  color: Colors.white,
                  fontSize: 11,
                }}>
                {groupData.title}
              </Text>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default GroupListItem;
