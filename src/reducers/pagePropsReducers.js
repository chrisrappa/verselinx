import {
  PAGEPROPS_POST_REQUEST,
  PAGEPROPS_POST_SUCCESS,
  PAGEPROPS_POST_FAIL,
  PAGEPROPS_PUT_REQUEST,
  PAGEPROPS_PUT_SUCCESS,
  PAGEPROPS_PUT_FAIL
} from '../constants/pagePropsConstants';


const pagePropPost = (state = {pageProps: {}}, action) => {

  switch(action.type){
    case PAGEPROPS_POST_REQUEST: {
      return {loading: true, pageProps: {}};
    }
    case PAGEPROPS_POST_SUCCESS: {
      return {loading: false, pageProps: action.payload};
    }
    case PAGEPROPS_POST_FAIL: {
      return {loading: false, error: action.payload};
    }
    default:
      return state;
  };

}

const pagePropPut = (action) => {

  switch(action.type){
    case PAGEPROPS_PUT_REQUEST: {
      break;

    }
    case PAGEPROPS_PUT_SUCCESS: {
      break;

    }
    case PAGEPROPS_PUT_FAIL: {
      break;

    }
    default: {}
  };

}

export { pagePropPost, pagePropPut };