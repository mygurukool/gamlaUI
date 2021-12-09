// import {
//   userTypes,
//   toastTypes,
//   restaurantTypes,
//   expensesTypes,
//   orderTypes,
//   customerTypes,
// } from '../constants/types';

import {utilTypes} from '../types/index';

const INITIAL_STATE = {
  packageOpen: false,
  businessOpen: false,
  subscriptionOpen: false,

  notifications: true,

  privacyLink: 'https://eduparv.com/privacy-policy',
  isLoading: false,
  updateModal: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case utilTypes.TOGGLE_PACKAGE_MODAL:
      return {
        ...state,
        packageOpen: !state.packageOpen,
      };

    case utilTypes.TOGGLE_BUSINESS_MODAL:
      return {
        ...state,
        businessOpen: !state.businessOpen,
      };

    case utilTypes.TOGGLE_SUBSCRIPTION_MODAL:
      return {
        ...state,
        subscriptionOpen: !state.subscriptionOpen,
      };

    case utilTypes.TOGGLE_NOTIFICATIONS:
      return {
        ...state,
        notifications: !state.notifications,
      };

    case utilTypes.TOGGLE_UPDATE_MODAL:
      return {
        ...state,
        updateModal: !state.updateModal,
      };

    case 'SPINNER_START':
      return {
        ...state,
        isLoading: true,
      };

    case 'SPINNER_STOP':
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
