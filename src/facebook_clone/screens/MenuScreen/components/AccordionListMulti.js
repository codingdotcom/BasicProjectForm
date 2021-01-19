import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export class AccordionListMulti extends Component {
  state = {
    activeSections: [],
    multipleSelect: false,
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  isMultipleSelect = (flag) => {
    this.setState({multipleSelect: flag});
  };

  render() {
    const {activeSections, multipleSelect} = this.state;
    const {listSections, renderHeader, renderContent, duration, Animatable} = this.props;
    return (
      <Accordion
        activeSections={activeSections}
        sections={listSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        touchableComponent={TouchableOpacity}
        expandMultiple={multipleSelect}
        duration={duration}
        Animatable={Animatable}
        onChange={this.setSections}
      />
    );
  }
}

const styles = StyleSheet.create({
  collapsing: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },

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
