import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';

import Colors from '../../contants/color';

import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {getStatusBarHeight as getHeight} from 'react-native-status-bar-height';

import {SearchBar, Icon} from 'react-native-elements';

// console.log('1', marginTop);
// console.log('2', getHeight());

const marginTop = getStatusBarHeight();

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  updateSearch = (search) => {
    this.setState({search});
  };

  componentDidMount() {}

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <SearchBar
            placeholder="검색어를 입력해 주세요."
            onChangeText={this.updateSearch}
            value={this.state.search}
            // showLoading
            round
            lightTheme
            platform="ios"
            cancelButtonTitle="취소"
            cancelButtonProps={{color: Colors.subtext, fontSize: 12}}
            containerStyle={{backgroundColor: Colors.white, height: 55, justifyContent: 'center'}}
            inputContainerStyle={{backgroundColor: Colors.lightgrey_1, height: 40}}
            inputStyle={{fontSize: 14, color: Colors.bigtext}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    top: Platform.OS === 'ios' ? marginTop + 10 : 5,
    backgroundColor: Colors.white,
  },
});

export default SearchScreen;
