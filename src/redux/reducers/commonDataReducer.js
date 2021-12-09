//dummy data

import {commonTypes} from '../types/index';

const INITIAL_STATE = {
  isLoading: false,
  upComingFestivals: [],
  categories: [],
  businesses: [],
  activeBusiness: undefined,
  currentBusiness: {
    businessLogo: undefined,
    id: undefined,
  },
  subCategories: [],
  currentCategory: {
    subCategories: [],
    id: undefined,
  },
  templates: [],
  subscriptions: [],
  frames: [],
};

const commonDataReducer = (state = INITIAL_STATE, action) => {
  const getData = () => {
    return action.payload.data.data;
  };
  switch (action.type) {
    case commonTypes.GET_EXPLORE_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        upComingFestivals: getData()?.upComingFestivals || [],
        categories: getData()?.categories || [],
        sliders: getData()?.sliders || [],
      };

    case commonTypes.GET_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentCategory: getData(),
      };

    case commonTypes.GET_BUSINESS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        businesses: getData()?.businesses || [],
        activeBusiness: getData()?.activeBusiness,
      };

    case commonTypes.GET_ALL_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subscriptions: getData() || [],
      };

    case commonTypes.GET_IMAGE_EDITOR_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case commonTypes.GET_IMAGE_EDITOR_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        templates: getData()?.templates || [],
        frames: getData()?.frames || [],
      };

    case commonTypes.GET_IMAGE_EDITOR_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default commonDataReducer;
