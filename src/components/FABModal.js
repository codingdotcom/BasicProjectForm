import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import {FAB, Portal} from 'react-native-paper';

import Colors from '../contants/color';

import {getBottomSpace} from 'react-native-iphone-x-helper';

//FAB 그룹 버튼
export class FABGroup extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Portal>
        <FAB.Group
          visible={this.props.visible}
          open={this.state.open}
          icon={this.state.open ? this.props.OpenAfterIcon : this.props.OpenBeforeIcon}
          style={{position: 'absolute'}}
          actions={this.props.actions}
          // {[
          //   //icon={require('../assets/images/water-glass.png')}
          //   {icon: this.props.actions.actionsIcon, color: this.props.actions.actionsColor, onPress: () => this.props.actions.actionsMethod('')},
          // ]}
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

//FAB 기본  - 버튼 하나
export class FABdefault extends Component {
  render() {
    return (
      <Portal>
        <FAB
          visible={this.props.visible}
          open={this.state.open}
          icon={this.props.icon}
          style={{position: 'absolute'}}
          onPress={() => {
            console.log('Pressed');
          }}
          color={'white'}
          fabStyle={{borderWidth: 0, borderColor: 'white', backgroundColor: Colors.black}}
          style={{paddingBottom: getBottomSpace() + 70, paddingRight: 0}}
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
