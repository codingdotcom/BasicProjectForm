import axios from 'axios';
import {Alert, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const socketAddr = 'http://api.smarteye24.com:3000';
export const appApiAddr = 'http://api.smarteye24.com/protocol';
// export const adminApiAddr = 'http://api.smarteye24.com/aprotocol'

/**
 * 공통 통신 처리 부분
 */
const MyPost = (component, url, params, success, fail) => {
  console.log('params', params);
  const proc = async () => {
    try {
      const auth = await AsyncStorage.getItem('auth');
      console.log('auth : ' + auth);

      const response = await axios({
        method: 'POST',
        url: appApiAddr + url,
        data: params,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: auth,
        },
      });

      CommonResult(response.data);
      if (success !== '') {
        component[success](response.data);
      }
    } catch (e) {
      console.log('e : ' + e);
      if (fail !== '') {
        component[fail](e);
      } else {
        NetworkFail(e);
      }
    }
  };

  proc();
};

const resetStatus = async () => {
  await AsyncStorage.setItem('auth', '');
  await AsyncStorage.setItem('AutoLogin', '');
};

const CommonResult = (response) => {
  console.log(`CommonResult ${JSON.stringify(response)}`);

  if (response['token'] !== undefined && response['token'] !== '') {
    console.log('Token => ', response['token']);
    AsyncStorage.setItem('auth', response['token']);
  }

  if (response['result'] === -99) {
    resetStatus();
  }
};

const NetworkFail = (response) => {
  // alert('네트워크 연결 실패 : ' + JSON.stringify(response));
  Alert.alert('네트워크 에러', '네트워크 연결을 확인해 주세요.', [
    {
      title: '확인',
      onPress: () => {},
      style: 'default',
    },
  ]);
};

/**
 * 회원가입
 */
export const MemberSignUp = (component, data, success, fail) => {
  var params = new FormData();

  params.append('m_id', data.email);
  params.append('m_pwd', data.password);
  params.append('m_sns', data.m_sns); //카카오 email
  params.append('m_email', data.email !== 'kakao' ? data.email : '');
  params.append('m_phone', data.phone);
  params.append('m_addr1', data.area1); // 시/도
  params.append('m_addr2', data.area2); // 군/구
  params.append('m_addr3', ''); // 읍/명/동
  params.append('m_addr4', ''); //나머지 주소
  params.append('m_introduce', '');
  params.append('m_device', '');
  params.append('m_push_key', data.m_push_key);
  params.append('m_push_os', data.m_push_os);
  params.append('m_agree_etc1', 'Y');
  params.append('m_agree_etc2', 'Y');
  params.append('m_agree_etc3', 'Y');
  params.append('m_agree_etc4', 'Y');
  params.append('m_agree_etc5', 'Y');

  MyPost(component, '/member/signup', params, success, fail);
};

/**
 * 로그인 처리
 */
export const MemberSignin = (component, data, success, fail) => {
  var params = new FormData();

  params.append('m_id', data.email);
  params.append('m_pwd', data.password);
  params.append('m_push_key', data.m_push_key);
  params.append('m_push_os', data.m_push_os);
  params.append('type', data.type);

  MyPost(component, '/member/signin', params, success, fail);
};

/**
 * 아이디 찾기
 */
export const SearchID = (component, phone, name, success, fail) => {
  var params = new FormData();

  params.append('m_phone', phone);
  params.append('name', name);

  MyPost(component, '/member/searchID', params, success, fail);
};

/**
 * 패스워드 찾기
 */
export const SearchPwd = (component, phone, id, success, fail) => {
  var params = new FormData();

  params.append('m_phone', phone);
  // params.append("name", name);
  params.append('id', id);

  MyPost(component, '/member/searchPwd', params, success, fail);
};

/**
 * 인증번호 요청 - (비밀번호 찾기)
 */
export const RequestPhone = (component, phone, success, fail) => {
  var params = new FormData();

  params.append('m_phone', phone);

  MyPost(component, '/member/requestPhone', params, success, fail);
};

/**
 * 인증번호 요청 - (비밀번호 찾기)
 */
export const ConfirmPhone = (component, code, success, fail) => {
  var params = new FormData();

  params.append('code', code);

  MyPost(component, '/member/confirmPhone', params, success, fail);
};
