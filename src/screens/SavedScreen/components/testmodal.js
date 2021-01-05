import React, {Component} from 'react';
import {Alert, Button, Platform, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Colors from '../../../contants/color';

import ClosableModal from 'rn-closable-modal';

class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  _onModalClosed = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <View style={styles.screen}>
        <ClosableModal
          show={this.state.showModal}
          onClose={this._onModalClosed}
          orientation={'horizontal' | 'vertical'}
          overlayColor={'rgba(0,0,0,0.8)'}>
          <View style={styles.contentView}>
            <Text>Modal</Text>
          </View>
        </ClosableModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },

  contentView: {
    width: 250,
    height: 300,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TestModal;
