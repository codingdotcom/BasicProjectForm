import {useRef} from 'react';
import {LOGIN, LOGOUT} from '../AcitonType';

const initialState = {
  name: null,
  password: null,
};

export default (state = initialState, action) => {
  const {type, user} = action;
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        name: user.name,
        password: user.password,
      };
    case type.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
