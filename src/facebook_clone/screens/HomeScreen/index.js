import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

import AppBar from './components/AppBar';
import ToolBar from './components/ToolBar';
import Users from './components/Users';
import Story from './components/Story';
import Feed from './components/Feed';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView`
  flex: 1;
  background: #ffffff;
`;

export default HomeScreen;
