import {userApi} from '../api/index';
import {userTypes} from '../types/index';

export const loginUser = (data, cb) => {
  return {
    type: userTypes.LOGIN_USER,
    payload: {
      request: {
        method: 'post',
        url: userApi.LOGIN_USER,
        data: data,
      },
      enableMessage: true,
      successMessage: 'Login Successfull',
      errorMessage: 'Failed to Login',
      cb: cb,
    },
  };
};

export const checkOTP = data => {
  return {
    type: userTypes.CHECK_OTP,
    payload: {
      request: {
        method: 'post',
        url: userApi.CHECK_OTP,
        data: data,
      },
    },
  };
};

export const logOutUser = () => {
  return {
    type: userTypes.LOGOUT_USER,
  };
};

export const updateUserProfile = (data, cb) => {
  const formData = new FormData();
  Object.keys(data).forEach((key, i) => {
    if (Array.isArray(data[key])) {
      const file = data[key][0];
      if (file)
        formData.append(
          key,

          {
            uri: file.uri,
            type: file.type,
            name: file.name,
          },
        );
    } else {
      formData.append(key, data[key]);
    }
  });
  return {
    type: userTypes.EDIT_USER_PROFILE,
    payload: {
      request: {
        method: 'post',
        url: userApi.UPDATE_PROFILE,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
      enableMessage: true,
      successMessage: 'Profile Updated Successfully',
      errorMessage: 'Failed to update Profile',
      cb: cb,
    },
  };
};

export const loginLocally = data => {
  return {
    type: userTypes.LOCAL_LOGIN,
    payload: {
      request: {
        method: 'get',
        url: userApi.LOCAL_LOGIN,
      },
    },
  };
};

export const uploadProfilePicture = file => {
  const formData = new FormData();
  formData.append('photo', file);
  return {
    type: userTypes.UPLOAD_USER_PROFILE_PICTURE,
    payload: {
      request: {
        method: 'post',
        url: userApi.UPLOAD_PROFILE_PICTURE,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    },
  };
};

export const getLoginOtp = (data, cb) => {
  return {
    type: userTypes.GET_LOGIN_OTP,
    payload: {
      request: {
        method: 'post',
        url: userApi.GET_LOGIN_OTP,
        data: data,
      },
      successMessage: 'Otp sent successfully',
      errorMessage: 'Failed to get otp',
      enableMessage: true,
      cb: cb,
    },
  };
};

export const editProfile = data => {
  return {
    type: userTypes.EDIT_USER_INFO,
    payload: {
      request: {
        method: 'post',
        url: userApi.EDIT_PROFILE,
        data: data,
      },
    },
  };
};
