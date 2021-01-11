import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import Colors from '../../../../contants/color';
import Sizes from '../../../../contants/size';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.mData;

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.textContainer}>
            <View style={styles.tickerContainer}>
              <View>
                <Text style={styles.tickerText}>{data.ticker}</Text>
              </View>
            </View>
            <Image style={styles.image} source={data.imageUri} />
            <Text style={styles.header}>{data.header}</Text>
            <Text style={styles.description}>{data.desc}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: widthWindow,
    height: heightWindow,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // flex: 1,
    marginTop: 80,
    width: widthWindow * 0.75,
    height: heightWindow * 0.3,
    resizeMode: 'contain',
    // backgroundColor: 'pink',
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 1,
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    overflow: 'hidden',
    height: 40,
  },
  tickerText: {
    fontSize: 40,
    lineHeight: 40,
    textTransform: 'uppercase',
    fontWeight: '800',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 5,
    color: Colors.bigtext,
  },
  description: {
    fontSize: 16,
    lineHeight: 16 * 1.3,
    textAlign: 'left',
    width: widthWindow * 0.75,
  },
});

export default Item;
