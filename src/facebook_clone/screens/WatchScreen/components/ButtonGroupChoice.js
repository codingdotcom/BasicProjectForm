import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList, TouchableHighlight, Dimensions, Text, ScrollView} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import Colors from '../../../../contants/color';

import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CATEGORY_HEIGHT = 50;

const width = Dimensions.get('screen').width;

class ButtonGroupChoice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
  }

  // updateIndex(newIndex) {
  //   this.setState.setState({selectedChoiceIndex: newIndex});
  // }

  //Button 모음
  btnMyRecommend = () => (
    <View style={styles.row}>
      <Entypo name="video" color={this.state.selectedIndex === 0 ? Colors.white : Colors.bigtext} size={16} />
      <Text style={{color: this.state.selectedIndex === 0 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>
        회원님을 위한 추천
      </Text>
    </View>
  );
  btnLive = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="video-account" color={this.state.selectedIndex === 1 ? Colors.white : Colors.bigtext} size={22} />
      <Text style={{color: this.state.selectedIndex === 1 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>라이브</Text>
    </View>
  );
  btnFollowing = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="folder-star-multiple" color={this.state.selectedIndex === 2 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 2 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>팔로잉</Text>
    </View>
  );
  btnFood = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="food-fork-drink" color={this.state.selectedIndex === 3 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 3 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>푸드</Text>
    </View>
  );

  btnGame = () => (
    <View style={styles.row}>
      <MateriaCommunityIcon name="gamepad-up" color={this.state.selectedIndex === 4 ? Colors.white : Colors.bigtext} size={18} />
      <Text style={{color: this.state.selectedIndex === 4 ? Colors.white : Colors.bigtext, marginLeft: 6, alignSelf: 'center'}}>게임</Text>
    </View>
  );

  render() {
    const buttons = [
      {element: this.btnMyRecommend},
      {element: this.btnLive},
      {element: this.btnFollowing},
      {element: this.btnFood},
      {element: this.btnGame},
    ];
    const {selectedIndex} = this.state;
    // console.log('index', selectedIndex);

    return (
      <ButtonGroup
        horizontal
        // onPress={() => {
        //   alert('selected');
        // }}
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        Component={TouchableHighlight}
        underlayColor="transparent"
        selectedButtonStyle={{
          backgroundColor:
            (selectedIndex === 0 && '#0D6CE0') ||
            (selectedIndex === 1 && '#FB001B') ||
            (selectedIndex === 2 && '#1EE64C') ||
            (selectedIndex === 3 && '#32C914') ||
            (selectedIndex === 4 && '#0E75DB'),
        }}
        innerBorderStyle={{width: 0, padding: 0, margin: 0}}
        buttonStyle={{paddingHorizontal: 13, borderRadius: 50, backgroundColor: '#E5E5E5'}}
        buttonContainerStyle={{paddingHorizontal: 5}}
        containerStyle={{paddingVertical: 2, borderWidth: 0}}
        activeOpacity={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default ButtonGroupChoice;
