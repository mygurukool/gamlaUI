import {utilTypes} from '../types';

export const togggleBusiness = () => {
  return {
    type: utilTypes.TOGGLE_BUSINESS_MODAL,
  };
};

export const togggleSubscription = () => {
  return {
    type: utilTypes.TOGGLE_SUBSCRIPTION_MODAL,
  };
};
