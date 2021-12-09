import {commonApi} from '../api';
import {commonTypes} from '../types';

export const getExploreData = (data, cb) => {
  return {
    type: commonTypes.GET_EXPLORE_DATA,
    payload: {
      request: {
        method: 'get',
        url: commonApi.GET_EXPLORE_DATA,
      },

      cb: cb,
    },
  };
};

export const getImageEditorData = (data, cb) => {
  return {
    type: commonTypes.GET_IMAGE_EDITOR_DATA,
    payload: {
      request: {
        method: 'get',
        url: commonApi.GET_IMAGE_EDITOR_DATA,
        params: data,
      },

      cb: cb,
    },
  };
};

export const getCategoryData = (data, cb) => {
  return {
    type: commonTypes.GET_CATEGORY_DATA,
    payload: {
      request: {
        method: 'get',
        url: commonApi.GET_CATEGORY_DATA,
        params: {
          id: data,
        },
      },

      cb: cb,
    },
  };
};

export const getBusinessData = (data, cb) => {
  return {
    type: commonTypes.GET_BUSINESS_DATA,
    payload: {
      request: {
        method: 'get',
        url: commonApi.GET_BUSINESS_DATA,
      },

      cb: cb,
    },
  };
};

export const initiateOrder = (data, cb, errorCb) => {
  return {
    type: commonTypes.INITIATE_ORDER,
    payload: {
      request: {
        method: 'post',
        url: commonApi.INITIATE_ORDER,
        data: data,
      },
      enableMessage: true,
      errorMessage: 'Failed',
      cb: cb,
      errorCb: errorCb,
    },
  };
};

export const purchaseSubsciption = (data, cb, errorCb) => {
  return {
    type: commonTypes.PURCHASE_SUBSCRIPTION,
    payload: {
      request: {
        method: 'post',
        url: commonApi.PURCHASE_SUBSCRIPTION,
        data: data,
      },
      enableMessage: true,
      successMessage: 'Payment Successfull',
      errorMessage: 'Failed to perchase susbscription',
      cb: cb,
      errorCb: errorCb,
    },
  };
};

export const getAllSubsctiptions = (data, cb) => {
  return {
    type: commonTypes.GET_ALL_SUBSCRIPTIONS,
    payload: {
      request: {
        method: 'get',
        url: commonApi.GET_ALL_SUBSCRIPTIONS,
      },

      cb: cb,
    },
  };
};
export const activateBusiness = (data, cb) => {
  return {
    type: commonTypes.ACTIVATE_BUSINESS,
    payload: {
      request: {
        method: 'post',
        url: commonApi.ACTIVATE_BUSINESS,
        data: {id: data},
      },
      enableMessage: true,
      successMessage: 'Business Activated',
      errorMessage: 'Failed to activate Business',

      cb: cb,
    },
  };
};

export const uploadBusinessLogo = (data, cb, errorCb) => {
  const formData = new FormData();
  formData.append('logo', data.file);
  formData.append('businessId', data?.businessId);

  return {
    type: commonTypes.UPLOAD_BUSINESS_LOGO,
    payload: {
      request: {
        method: 'post',
        url: commonApi.UPLOAD_BUSINESS_LOGO,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
      enableMessage: true,
      successMessage: 'Logo updated successfully',
      errorMessage: 'Failed to update logo',

      cb: cb,
      errorCb: errorCb,
    },
  };
};
