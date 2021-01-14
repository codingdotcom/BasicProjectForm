import React, {Component} from 'react';

import styled from 'styled-components/native';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLine: false,
    };
  }

  render() {
    return (
      <Container activeOpacity={0.8}>
        <User source={this.props.source} story={this.props.story} />
        {this.props.onLine && <UserActive />}
      </Container>
    );
  }
}

const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  position: relative;
`;

const User = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #1777f2;
  border-width: ${(props) => (props.story ? '3px' : 0)};
`;

const UserActive = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background: #4bcb1f;
  position: absolute;
  bottom: -2px;
  right: -2px;
  border-width: 2px;
  border-color: #ffffff;
`;

export default Avatar;
