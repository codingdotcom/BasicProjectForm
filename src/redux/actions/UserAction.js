import {LOGIN, LOGOUT} from '../AcitonType';

export const actions = {
  login: (user) => {
    return {type: LOGIN, user};
  },
  logout() {
    return {type: LOGOUT};
  },
};
