//dummy data

import removeToken from '../../helpers/removeToken';
import setToken from '../../helpers/setToken';
import {commonTypes, userTypes} from '../types/index';
const defaultValues = {
  name: undefined,
  mobile: undefined,
  logo: undefined,
};
const INITIAL_STATE = {
  isLogged: false,

  isLoading: false,
  token: '',
  notifications: [],
  fullName: undefined,

  mobile: undefined,

  subscriptions: [],
  role: 'user',

  isSubscribed: false,
  isSubscriptionExpired: false,
  profileData: {},
  subscription: undefined,
  ...defaultValues,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const getData = () => {
    return action.payload.data.data;
  };
  switch (action.type) {
    case commonTypes.PURCHASE_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        subscription: getData(),
      };

    case userTypes.LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };

    case userTypes.LOCAL_LOGIN:
      return {
        ...state,
        // isLoading: true,
      };

    case userTypes.LOCAL_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        isLoading: false,
        ...action.payload.data.user,
      };

    case userTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        isLogged: false,

        isLoading: false,
      };

    case userTypes.LOGIN_USER_SUCCESS:
      setToken(action.payload.data.token);

      return {
        ...state,
        ...action.payload.data.user,
        token: action.payload.data.token,

        isLogged: true,

        isLoading: false,

        previousWatched: [],

        isSocial: action.payload.data.user?.password ? true : false,
      };

    case userTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case userTypes.SKIP_LOGIN:
      return {
        ...state,
        hasSkippedLogin: true,
      };

    case userTypes.LOGOUT_USER:
      removeToken();
      return {
        ...state,
        ...INITIAL_STATE,
        isLogged: false,
      };

    case userTypes.REGISTER_USER:
      return {
        ...state,
        isLoading: true,
      };

    case userTypes.REGISTER_USER_SUCCESS:
      const token = action.payload.data.token;
      setToken(token);

      return {
        ...state,
        ...action.payload.data.user,
        fullName: action.payload.data.user.name,
        isLoading: false,
        isLogged: true,

        selectedStandardId: undefined,
        token,
      };

    case userTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case userTypes.GET_USER_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case userTypes.GET_USER_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notifications: getData() || [],
      };
    case userTypes.GET_USER_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
