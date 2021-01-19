import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

import Ionicons from 'react-native-vector-icons/Ionicons';

export class AccordionListSingle extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  render() {
    const {header, headerText, collapsing} = styles;
    const {title, children, collapsingCustom, renderHeader} = this.props;
    return (
      <View style={[collapsing, collapsingCustom]}>
        <TouchableOpacity onPress={this.toggleExpanded} activeOpacity={0.8} style={{justifyContent: 'center'}}>
          {renderHeader ? (
            renderHeader
          ) : (
            <View style={header}>
              <Text style={headerText}>{title}</Text>
            </View>
          )}
          <View style={{position: 'absolute', right: 16}}>
            {this.state.collapsed == true ? (
              <Ionicons name="chevron-down-outline" size={24} color="black" />
            ) : (
              <Ionicons name="chevron-up-outline" size={24} color="black" />
            )}
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={this.state.collapsed} align="center">
          {children}
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  collapsing: {},

  header: {
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
});
