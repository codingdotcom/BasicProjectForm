import React, {Component} from 'react';

import {ScrollView, View} from 'react-native';

import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MateriaCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import Avatar from '../../HomeScreen/components/Avatar';

class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.mData;
    return (
      <>
        <Container>
          <Header>
            <Row>
              <Avatar source={data.avataUri} />
              <View style={{paddingLeft: 10}}>
                <Row>
                  <User>{data.name}</User>
                </Row>
                <Row style={{marginTop: 2}}>
                  <Time>{data.uploadTime}</Time>
                  <Entypo name="dot-single" size={14} color="#747476" />
                  <Entypo name="globe" size={12} color="#747476" />
                </Row>
              </View>
            </Row>
            <Button activeOpacity={0.8}>
              <Entypo name="dots-three-horizontal" size={20} color="#898989" />
            </Button>
          </Header>

          <Post numberOfLines={10} ellipsizeMode="tail">
            {data.post}
          </Post>
          <Photo resizeMode={'cover'} source={data.photo} />

          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#ffffff" />
                </IconCount>
                <TextCount>{data.totalLike}</TextCount>
              </Row>
              <Row>
                <TextCount style={{marginRight: 10}}>{data.comment}</TextCount>
                <TextCount style={{}}>{data.share}</TextCount>
              </Row>
            </FooterCount>
          </Footer>

          <View style={{marginHorizontal: 11, height: 0.5, backgroundColor: '#cfcfcf'}} />

          <FooterMenu>
            <FooterButton activeOpacity={0.8} onPress={this.props.btnLike}>
              <Icon>
                <AntDesign name="like2" size={21} color="#424040" />
              </Icon>
              <Text>좋아요</Text>
            </FooterButton>

            <FooterButton activeOpacity={0.8} onPress={this.props.btnComment}>
              <Icon>
                <MateriaCommunityIcon name="comment-outline" size={21} color="#424040" />
              </Icon>
              <Text>댓글달기</Text>
            </FooterButton>

            <FooterButton activeOpacity={0.8} onPress={this.props.btnShare}>
              <Icon>
                <MateriaCommunityIcon name="share-outline" size={23} color="#424040" />
              </Icon>
              <Text>공유하기</Text>
            </FooterButton>
          </FooterMenu>
        </Container>
      </>
    );
  }
}

const Background = styled(LinearGradient)`
  width: 100%;
  height: 500px;
`;

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;

const Followbutton = styled.TouchableOpacity`
  padding: 0px 0px;
  padding-left: 4px;
`;

const Button = styled.TouchableOpacity`
  padding: 18px 0px;
  padding-left: 10px;
`;

const Row = styled.View`
  align-items: center;
  flex-direction: row;
  background: #ffffff;
`;

const User = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #222121;
`;

const Time = styled.Text`
  font-size: 11px;
  color: #747476;
`;

const Post = styled.Text`
  font-size: 14px;
  background: #ffffff;
  color: #242424;
  line-height: 16px;
  padding: 0 11px;
  padding-top: 2px;
`;

const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;

const Footer = styled.View`
  padding: 0 11px;
  background: #ffffff;
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

const Follow = styled.Text`
  color: #1878f3;
  font-size: 13px;
`;

const TextCount = styled.Text`
  font-size: 13px;
  color: #424040;
`;

const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 30px;
  background: #ffffff;
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

export default VideoItem;
