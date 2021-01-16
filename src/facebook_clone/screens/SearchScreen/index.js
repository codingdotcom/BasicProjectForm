import React, {Component} from 'react';
import {SafeAreaView, Dimensions, StyleSheet, View, TextInput, Text, Image, TouchableHighlight, ScrollView} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../../../contants/color';

import Animated, {Easing} from 'react-native-reanimated';

const {Value, timing} = Animated;

// Calculate window size
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      isFocused: false,
      keyword: '',
    };

    // animation values
    this._input_box_translate_x = new Value(width);
    this._back_button_opacity = new Value(0);
    this._content_translate_y = new Value(height);
    this._content_opacity = new Value(0);

    this.textInput = React.createRef();
  }

  _onFocus = () => {
    // update state
    this.setState({isFocused: true});
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();

    // force focus
    // this.refs.input.focus();
    this.textInput.current.focus();
  };

  _onBlur = () => {
    // update state
    this.setState({isFocused: false});
    // animation config
    // input box
    const input_box_translate_x_config = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };
    const back_button_opacity_config = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    // content
    const content_translate_y_config = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };
    const content_opacity_config = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    // run animation
    timing(this._input_box_translate_x, input_box_translate_x_config).start();
    timing(this._back_button_opacity, back_button_opacity_config).start();
    timing(this._content_translate_y, content_translate_y_config).start();
    timing(this._content_opacity, content_opacity_config).start();

    // force blur
    // this.refs.input.blur();
    this.textInput.current.blur();
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.header_safe_area}>
          <Animated.View style={[styles.input_box, {transform: [{translateX: this._input_box_translate_x}]}]}>
            <Animated.View style={{opacity: this._back_button_opacity}}>
              <TouchableHighlight activeOpacity={1} underlayColor={'#F2F2F2'} onPress={this._onBlur} style={styles.back_icon_box}>
                <Ionicons name="chevron-back" size={24} color="#000000" />
              </TouchableHighlight>
            </Animated.View>
            <TextInput
              ref={this.textInput}
              placeholder="Facebook 검색"
              clearButtonMode="always"
              value={this.state.keyword}
              onChangeText={(value) => this.setState({keyword: value})}
              style={styles.input}
            />
          </Animated.View>
        </SafeAreaView>

        <Animated.View style={[styles.content, {opacity: this._content_opacity, transform: [{translateY: this._content_translate_y}]}]}>
          <SafeAreaView style={styles.content_safe_area}>
            <View style={styles.content_inner}>
              <View style={styles.separator} />
              {this.state.keyword === '' ? (
                <View style={styles.image_placeholder_container}>
                  <Image source={require('../../assets/Search-Illustration.png')} style={styles.image_placeholder} />
                  <Text style={styles.image_placeholder_text}>
                    Facebook에서 검색할{'\n'}
                    단어를 입력하세요.
                  </Text>
                </View>
              ) : (
                <ScrollView>
                  <View style={styles.search_item}>
                    <Ionicons style={styles.item_icon} name="search" size={16} color="#cccccc" />
                    <Text>Fake result 1</Text>
                  </View>
                  <View style={styles.search_item}>
                    <Ionicons style={styles.item_icon} name="search" size={16} color="#cccccc" />
                    <Text>Fake result 2</Text>
                  </View>
                  <View style={styles.search_item}>
                    <Ionicons style={styles.item_icon} name="search" size={16} color="#cccccc" />
                    <Text>Fake result 3</Text>
                  </View>
                  <View style={styles.search_item}>
                    <Ionicons style={styles.item_icon} name="search" size={16} color="#cccccc" />
                    <Text>Fake result 4</Text>
                  </View>
                  <View style={styles.search_item}>
                    <Ionicons style={styles.item_icon} name="search" size={16} color="#cccccc" />
                    <Text>Fake result 5</Text>
                  </View>
                </ScrollView>
              )}
            </View>
          </SafeAreaView>
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
  },
  input_box: {
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    paddingRight: 25,
  },
  back_icon_box: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 40,
    color: Colors.bigtext,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 18,
    fontSize: 14,
  },

  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_inner: {
    flex: 1,
    marginTop: 118,
    paddingTop: 70,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  image_placeholder_container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '30%',
  },
  image_placeholder: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  image_placeholder_text: {
    textAlign: 'center',
    color: Colors.subtext,
    marginTop: 10,
  },
  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  item_icon: {
    marginRight: 15,
  },
});

export default SearchScreen;
