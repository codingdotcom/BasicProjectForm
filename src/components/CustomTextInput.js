import React, {Component} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import values from '../contants/size';
import PropTypes from 'prop-types';
import {number} from 'prop-types';

class CustomTextInput extends Component {
  constructor(props) {
    super(props);

    this.value = '';
  }

  inputChangeHandler = (e) => {
    this.value = e.nativeEvent.text;
  };

  render() {
    return (
      <TextInput
        ref={this.ref}
        onSubmitEditing={this.onSubmitEditing}
        style={{...styles.input, ...this.props.style}}
        onChange={this.inputChangeHandler}
        onChangeText={this.props.onChangeText}
        multiline={this.props.multiline}
        autoCapitalize={'none'}
        returnKeyType={this.props.returnKeyType}
        email={this.props.email}
        errorMessage={this.props.errorMessage}
        initialValue={this.props.initialValue}
        keyboardType={this.props.keyboardType}
        label={this.props.label}
        required={this.props.required}
        blurOnSubmit={false}
        minLength={this.props.minLength}
        maxLength={this.props.maxLength}
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        placeholderStyle={this.props.placeholderStyle}
        defaultValue={this.props.defaultValue}
        value={this.props.value}
        autoFocus={this.props.autoFocus}
        underlineColorAndroid={'transparent'}
        // textAlign={'center'}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: values.inputHeight,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
  },
});

export default CustomTextInput;
