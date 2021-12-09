export const userApi = {
  LOGIN_USER: '/api/login',
  GET_LOGIN_OTP: '/api/sendloginotp',
  LOCAL_LOGIN: '/api/details',

  UPDATE_PROFILE: '/api/user/updateprofile',
  GET_USER_SUBSCRIPTIONS: `/api/subscriptions/userSubscription`,
  UPLOAD_PROFILE_PICTURE: `/api/user/changeProfileImage`,

  EDIT_PROFILE: `/api/user/updateProfile`,
};

export const commonApi = {
  GET_EXPLORE_DATA: '/api/explore',

  GET_IMAGE_EDITOR_DATA: '/api/imageeditor',

  GET_CATEGORY_DATA: '/api/category',

  GET_BUSINESS_DATA: '/api/business/all',

  GET_ALL_SUBSCRIPTIONS: '/api/subscriptions/all',

  ACTIVATE_BUSINESS: '/api/business/activate',

  UPLOAD_BUSINESS_LOGO: '/api/business/uploadlogo',

  INITIATE_ORDER: '/api/subscriptions/initiateorder',
  PURCHASE_SUBSCRIPTION: '/api/subscriptions/purchase',
};
