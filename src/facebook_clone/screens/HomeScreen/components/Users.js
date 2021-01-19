import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';

import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Avatar from './Avatar';

class Users extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Container>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 11}}>
            <MovieTokBox>
              <Micon name="video-plus" size={26} color="#e141fc" />
              <Text>영상톡 모임{'\n'}만들기</Text>
            </MovieTokBox>
            <User>
              <Avatar source={require('../../../assets/user/user2.jpg')} onLine={true} />
            </User>
            <User>
              <Avatar source={require('../../../assets/user/user3.jpg')} onLine={false} />
            </User>
            <User>
              <Avatar source={require('../../../assets/user/user4.jpg')} onLine={true} />
            </User>
            <User>
              <Avatar source={require('../../../assets/user/user5.jpg')} onLine={false} />
            </User>
          </ScrollView>
        </Container>
        <BottomDivider />
      </>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
  background: white;
`;

const MovieTokBox = styled.TouchableOpacity`
  width: 115px;
  height: 40px;
  border-color: #82b1ff;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: 0 15px;
  margin-right: 12px;
`;

const Text = styled.Text`
  color: #1777f2;
  font-size: 11px;
  padding-left: 6px;
`;

const User = styled.View`
  margin-right: 12px;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

export default Users;
