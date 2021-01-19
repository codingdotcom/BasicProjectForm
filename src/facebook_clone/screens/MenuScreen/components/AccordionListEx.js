import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {AccordionListSingle} from './AccordionListSingle';
import {AccordionListMulti} from './AccordionListMulti';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs.',
  },
  {
    title: 'Second',
    content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs.',
  },
  {
    title: 'Second',
    content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs.',
  },
  {
    title: 'Second',
    content: 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs.',
  },
];

export default class AccordionList extends Component {
  renderHeaderSingle = () => {
    const {headerCustom, headerText} = styles;
    return (
      <View style={headerCustom}>
        <Text style={headerText}>Title custom</Text>
      </View>
    );
  };

  componentDidMount() {
    this.refMultiCollapsible.isMultipleSelect(true);
  }

  renderHeaderMulti = (section, _, isActive) => {
    return (
      <Animatable.View duration={50} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContentMulti(section, _, isActive) {
    return (
      <Animatable.View duration={50} style={{backgroundColor: '#eeeeee', padding: 16}} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'fadeInDown' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  changeStatusMulil = () => {
    // this.refMultiCollapsible.setSections([0, 1]);
  };

  changeStatusSingle = () => {
    this.refSingleCollapsible.toggleExpanded();
  };

  render() {
    const {container, content, collapsingCustom} = styles;

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{}}>
          <AccordionListMulti
            ref={(target) => (this.refMultiCollapsible = target)}
            listSections={CONTENT}
            // activeSections={this.state.activeSections}
            // renderSectionTitle={this._renderSectionTitle}
            renderHeader={this.renderHeaderMulti}
            renderContent={this.renderContentMulti}
            // duration={300}
            // onChange={this._updateSections}
          />

          <AccordionListSingle
            ref={(target) => (this.refSingleCollapsible = target)}
            // title="아코디언 싱글 리스트"
            collapsingCustom={collapsingCustom}
            renderHeader={this.renderHeaderSingle()}>
            <View style={content}>
              <Text numberOfLines={10}>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
            </View>
          </AccordionListSingle>

          <TouchableOpacity
            onPress={this.changeStatusMulil}
            style={{backgroundColor: 'red', marginTop: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Change Status Mutil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.changeStatusSingle}
            style={{backgroundColor: 'red', marginTop: 10, height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Change Status Single</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    // paddingTop: 50,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  collapsingCustom: {
    borderBottomColor: 'red',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  active: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  //   header: {
  //     backgroundColor: 'green',
  //     padding: 16,
  //   },
  //   headerText: {
  //     textAlign: 'left',
  //     fontSize: 16,
  //     fontWeight: '500',
  //   },
});
