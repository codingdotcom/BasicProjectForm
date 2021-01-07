import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Modal, Portal, Button} from 'react-native-paper';
import Colors from '../contants/color';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

class PaperModal extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  _hideModal = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <View style={styles.screen}>
        <Portal>
          <Modal visible={this.state.visible} onDismiss={this._hideModal} contentContainerStyle={styles.contentView}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
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
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.lightgrey,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: widthWindow * 0.7,
    height: heightWindow * 0.4,
    padding: 20,
  },
});

export default PaperModal;
