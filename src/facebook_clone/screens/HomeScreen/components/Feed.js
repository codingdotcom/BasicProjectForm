import React, {Component} from 'react';

import {ScrollView, View} from 'react-native';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import Avatar from './Avatar';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <Header>
            <Row>
              <Avatar source={require('../../../assets/user/user3.jpg')} />
              <View style={{paddingLeft: 10}}>
                <User>Pitter Sim</User>
                <Row>
                  <Time>9분전</Time>
                  <Entypo name="dot-single" size={14} color="#747476" />
                  <Entypo name="globe" size={14} color="#747476" />
                </Row>
              </View>
            </Row>
            <Button activeOpacity={0.8}>
              <Entypo name="dots-three-horizontal" size={20} color="#898989" />
            </Button>
          </Header>

          <Post numberOfLines={3} ellipsizeMode="tail">
            Happy, lovely, new year everyone!! Angelwwiong is hosting an online international Texh Recruitong Day. Happy, lovely, new year everyone!!
            Angelwwiong is hosting an online international Texh Recruitong Day. Happy, lovely, new year everyone!! Angelwwiong is hosting an online
            international Texh Recruitong Day.
          </Post>
          <Photo source={require('../../../assets/story3.jpg')} />

          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#ffffff" />
                </IconCount>
                <TextCount>88개</TextCount>
              </Row>
              <Row>
                <TextCount style={{marginRight: 10}}>댓글 15개</TextCount>
                <TextCount>공유 9회</TextCount>
              </Row>
            </FooterCount>
          </Footer>

          <View style={{marginHorizontal: 11, height: 0.5, backgroundColor: '#cfcfcf'}} />

          <FooterMenu>
            <FooterButton activeOpacity={0.8}>
              <Icon>
                <AntDesign name="like2" size={21} color="#424040" />
              </Icon>
              <Text>좋아요</Text>
            </FooterButton>

            <FooterButton activeOpacity={0.8}>
              <Icon>
                <Micon name="comment-outline" size={21} color="#424040" />
              </Icon>
              <Text>댓글달기</Text>
            </FooterButton>

            <FooterButton activeOpacity={0.8}>
              <Icon>
                <Micon name="share-outline" size={23} color="#424040" />
              </Icon>
              <Text>공유하기</Text>
            </FooterButton>
          </FooterMenu>
        </Container>
        <BottomDivider />
        <Background
          useAngle={true}
          angle={50}
          angleCenter={{x: 0.6, y: 0.4}}
          // locations={[0, 0.5, 1]}
          // start={{x: 0, y: 0.25}}
          // end={{x: 0.8, y: 1}}
          colors={['#FF66F3', '#B128FF', '#5945FF']}
        />
      </>
    );
  }
}

const Background = styled(LinearGradient)`
  width: 100%;
  height: 100px;
`;

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Button = styled.TouchableOpacity`
  padding: 18px 0px;
  padding-left: 10px;
`;

const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

const User = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 12px;
  color: #747476;
`;

const Post = styled.Text`
  font-size: 14px;
  color: #242424;
  line-height: 16px;
  padding: 0 11px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
`;

const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0px;
`;

const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;

const TextCount = styled.Text`
  font-size: 13px;
  color: #424040;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 30px;
`;

const FooterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.View`
  margin-right: 6px;
`;

const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;

const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;

export default Feed;
