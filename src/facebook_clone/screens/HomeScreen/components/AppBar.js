import React, {Component} from 'react';

import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class AppBar extends Component {
  render() {
    return (
      <Container>
        <Text> facebook </Text>
        <Row>
          <Button>
            <Ionicons name="ios-search" size={24} />
          </Button>
          <Button>
            <Micon name="facebook-messenger" size={24} />
          </Button>
        </Row>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: #3a86e9;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export default AppBar;
