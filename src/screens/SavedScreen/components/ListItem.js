import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, Alert, StyleSheet, Image, Dimensions, Platform} from 'react-native';
import {Card} from 'react-native-elements';
import Colors from '../../../contants/color';
import Size from '../../../contants/size';

const widthWindow = Dimensions.get('window').width;

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.mData;
    // console.log('1', Dimensions.get('window').width);
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={this.onPress}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
            {data.title}
          </Text>
          <View style={{borderWidth: 0.5, width: '100%', borderColor: Colors.lightgrey, marginVertical: 3}} />
          <Image source={data.imageUri} style={styles.image} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subText}>
            {data.info}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  card: {
    height: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightgrey,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0.2,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'contain',
  },
  titleText: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    color: Colors.bigtext,
  },
  subText: {
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'left',
    paddingHorizontal: 8,
    color: Colors.subtext,
  },
});

export default ListItem;
