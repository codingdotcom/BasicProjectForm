import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Animated, Image} from 'react-native';

import Colors from '../../../contants/color';

import data from '../../data';

const {width, height} = Dimensions.get('window');
const DOT_SIZE = 30;
const TICKER_HEIGHT = 30;
const CIRCLE_SIZE = width * 0.65;

const Circle = ({scrollX}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({color}, index) => {
        const inputRange = [(index - 0.55) * width, index * width, (index + 0.55) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: color,
                opacity,
                transform: [{scale}],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Ticker = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map(({type}, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({imageUri, heading, description, index, scrollX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [(index - 0.3) * width, index * width, (index + 0.3) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        source={imageUri}
        style={[
          styles.imageStyle,
          {
            transform: [{scale}],
          },
        ]}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
              transform: [{translateX: translateXHeading}],
            },
          ]}>
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
              transform: [
                {
                  translateX: translateXDescription,
                },
              ],
            },
          ]}>
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            // backgroundColor: 'red',
            transform: [{translateX}],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View style={[styles.paginationDot, {backgroundColor: item.color}]} />
          </View>
        );
      })}
    </View>
  );
};

const Indicator = ({scrollX}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      {data.map((item, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={item.key}
            style={{
              top: 10,
              bottom: 10,
              height: 8,
              width: 8,
              borderRadius: 5,
              backgroundColor: 'black',
              margin: 5,
              transform: [{scale}],
              opacity,
            }}
          />
        );
      })}
    </View>
  );
};

export default function FlatlistAnimation() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* <Ticker scrollX={scrollX} /> */}
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({item, index}) => <Item {...item} index={index} scrollX={scrollX} />}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
        scrollEventThrottle={16}
      />
      <Indicator scrollX={scrollX} />
      {/* <View style={{justifyContent: 'center', alignItems: 'center', bottom: 30}}>
        <Pagination scrollX={scrollX} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  itemStyle: {
    width,
    marginTop: '15%',
    // height: height * 0.55,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 0.6,
    height: width * 0.4,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0.5,
  },
  heading: {
    color: Colors.bigtext,
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 60,
    marginBottom: 5,
  },
  description: {
    color: Colors.subtext,
    fontWeight: '400',
    width: width * 0.75,
    fontSize: 18,
    lineHeight: 18 * 1.3,
  },
  pagination: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    // right: 20,
    // bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    color: Colors.bigtext,
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '2%',
  },
});
