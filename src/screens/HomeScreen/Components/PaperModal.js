import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {FAB, Portal} from 'react-native-paper';
import Colors from '../../../contants/color';

import {getBottomSpace} from 'react-native-iphone-x-helper';

class PaperModal extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Portal>
        <FAB.Group
          visible={this.props.visible}
          open={this.state.open}
          icon={this.state.open ? 'close' : 'info'}
          style={{position: 'absolute'}}
          actions={[
            //icon={require('../assets/images/water-glass.png')}
            {icon: 'pencil', color: Colors.btnColor, onPress: () => this.props._plus},
            {icon: 'google', color: Colors.btnColor, onPress: () => console.log('Pressed google')},
            {icon: 'search', color: Colors.btnColor, onPress: () => console.log('Pressed search')},
            {icon: 'phone', color: Colors.btnColor, onPress: () => console.log('Pressed phone')},
          ]}
          onStateChange={({open}) => this.setState({open})}
          onPress={() => {
            this.setState({open: !this.state.open});
          }}
          // style={styles.fab}
          color={'white'}
          fabStyle={
            (this.state.open ? {borderWidth: 0, borderColor: 'white', shadowOpacity: 0.3} : {shadowOpacity: 0.3}, {backgroundColor: Colors.black})
          }
          theme={this.state.open ? {colors: {accent: 'transparent'}} : undefined}
          style={{paddingBottom: getBottomSpace() + 70, paddingRight: 0}}
          // theme={{colors: {accent: 'blue'}}}
        />
      </Portal>
    );
  }
}

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    position: 'absolute',
    // alignItems: 'center',
    // alignSelf: 'center',
    bottom: height / 6.2,
  },
  fab: {
    paddingRight: width / 2.56,
    paddingBottom: height / 2.4,
  },
});

export default PaperModal;
