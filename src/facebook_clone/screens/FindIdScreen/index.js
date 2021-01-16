import React, {Component} from 'react';

import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Input, Icon} from 'react-native-elements';

import Colors from '../../../contants/color';

class FindIdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      born: '',
      email: '',
    };
  }

  render() {
    return (
      <Container>
        <ItemContainer>
          <InfoText>회원가입 시 입력한{'\n'}이름과,생년월일을 입력해 주세요.</InfoText>
          <SubInfoText>입력한 이메일 주소로{'\n'}가입한 아이디(이메일)가 전송됩니다.</SubInfoText>
          <StyledInput
            placeholder="이름을 입력해주세요."
            leftIcon={<MaterialIcon name="account-circle" color={Colors.bigtext} size={22} />}
            keyboardType={'default'}
            // blurOnSubmit={false}
            autoCapitalize="none"
            onChangeText={(value) => this.setState({name: value})}
          />

          <StyledInput
            placeholder="생년월일 입력(ex) 20210102"
            leftIcon={<FontAwesome name="birthday-cake" color={Colors.bigtext} size={20} />}
            keyboardType={'number-pad'}
            // blurOnSubmit={false}
            autoCapitalize="none"
            onChangeText={(value) => this.setState({born: value})}
          />

          <StyledInput
            placeholder="이메일 주소를 입력해주세요."
            leftIcon={<MaterialIcon name="email" color={Colors.bigtext} size={22} />}
            keyboardType={'email-address'}
            // blurOnSubmit={false}
            autoCapitalize="none"
            onChangeText={(value) => this.setState({email: value})}
          />
          <Button>
            <ButtonText>전송하기</ButtonText>
          </Button>
        </ItemContainer>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView`
  flex: 1;
`;
const ItemContainer = styled.View`
  flex: 1;
  /* padding: 20px; */
  /* align-items: center; */
  background-color: ${Colors.secondary_2};
`;
const InfoText = styled.Text`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  align-self: flex-start;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  color: ${Colors.bigtext};
`;

const SubInfoText = styled.Text`
  align-self: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 30px;
  color: ${Colors.subtext};
`;

const StyledInput = styled(Input).attrs({
  fontSize: 14,
  marginLeft: 8,
  marginRight: 6,
  color: Colors.bigtext,

  labelStyle: {},
  errorStyle: {
    margin: 0,
    padding: 0,
  },
  containerStyle: {
    margin: 0,
    padding: 0,
  },
  inputContainerStyle: {
    width: '100%',
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.bigtext,
    // paddingVertical: 20,
    paddingHorizontal: 20,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
})``;

const Button = styled.TouchableOpacity`
  margin: 15px;
  height: 60px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  border-radius: 30px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  align-self: center;
  color: ${Colors.white};
  align-items: center;
  justify-content: center;
`;

export default FindIdScreen;
