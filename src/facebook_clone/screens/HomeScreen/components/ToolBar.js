import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Avatar from './Avatar';

class ToolBar extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Avatar source={require('../../../assets/user/user1.jpg')} />
            <Text style={styles.text}> 무슨 생각을 하고 계신가요</Text>
          </Row>
          <View style={{width: '100%', height: 0.5, backgroundColor: '#f0f0f0f0'}} />
          <Row>
            <Menu>
              <Ionicons name="ios-videocam" size={22} color="#f44337" />
              <MenuText>라이브</MenuText>
            </Menu>
            <Separator />
            <Menu>
              <MaterialIcon name="photo-library" size={20} color="#4caf50" />
              <MenuText>사진</MenuText>
            </Menu>
            <Separator />
            <Menu>
              <Micon name="video-plus" size={22} color="#e141fc" />
              <MenuText>영상톡 모임</MenuText>
            </Menu>
            <Separator />
          </Row>
        </Container>
        <BottomDivider />
      </>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 92px;
`;

const Row = styled.View`
  flex-direction: row;
  background: #ffffff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;
const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

const MenuText = styled.Text`
  padding-left: 11px;
  font-weight: 500;
  font-size: 12px;
`;

const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 11,
  },
});

export default ToolBar;
