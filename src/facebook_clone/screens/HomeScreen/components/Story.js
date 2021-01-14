import React, {Component} from 'react';

import {ScrollView} from 'react-native';

import styled from 'styled-components/native';

import Avatar from './Avatar';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardContainer>
              <Card>
                <CardStory source={require('../../../assets/user/user1.jpg')} />
                <CardUser>
                  <Micon name="plus" size={24} color="#1777f2" />
                </CardUser>
                <CardFooter>
                  <Text>스토리 만들기</Text>
                </CardFooter>
              </Card>

              <Card>
                <CardStory source={require('../../../assets/story2.jpg')} />
                <CardUser>
                  <Avatar source={require('../../../assets/user/user2.jpg')} story={true} />
                </CardUser>
                <CardFooter>
                  <Text>Let's Go</Text>
                </CardFooter>
              </Card>

              <Card>
                <CardStory source={require('../../../assets/story3.jpg')} />
                <CardUser>
                  <Avatar source={require('../../../assets/user/user3.jpg')} story={true} />
                </CardUser>
                <CardFooter>
                  <Text>여행을 가다</Text>
                </CardFooter>
              </Card>

              <Card>
                <CardStory source={require('../../../assets/story4.jpg')} />
                <CardUser>
                  <Avatar source={require('../../../assets/user/user4.jpg')} story={true} />
                </CardUser>
                <CardFooter>
                  <Text>Tom Eddy</Text>
                </CardFooter>
              </Card>
            </CardContainer>
          </ScrollView>
        </Container>
        <BottomDivider />
      </>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding-left: 8px;
`;

const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;

const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`;

const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  left: 9px;
  bottom: 12px;
`;

const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

export default Story;
