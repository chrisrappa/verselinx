import {
  PAGEPROPS_POST_REQUEST,
  PAGEPROPS_POST_SUCCESS,
  PAGEPROPS_POST_FAIL,

  PAGEPROPS_PUT_REQUEST,
  PAGEPROPS_PUT_SUCCESS,
  PAGEPROPS_PUT_FAIL,
  
  PAGEPROPS_GET_REQUEST,
  PAGEPROPS_GET_SUCCESS,
  PAGEPROPS_GET_FAIL,
} from '../constants/pagePropsConstants';

const setPageProps = (pageProps) => async (dispatch) => {

  dispatch({type: PAGEPROPS_POST_REQUEST});

  try {

    // DB Iteration will grab page props for each category type from the data base
    // i.e. cont {data} = await axios.post('/path');

    const data  = pageProps;
    dispatch({type: PAGEPROPS_POST_SUCCESS, payload: data});


  } catch(error) {

    dispatch({type: PAGEPROPS_POST_FAIL, payload: error.message});

  }
}

const updatePageProps = (pageProps) => async (dispatch) => {

  dispatch({type: PAGEPROPS_PUT_REQUEST});

  try {

    // DB Iteration will grab page props for each category type from the data base
    // i.e. cont {data} = await axios.put('/path');

    const { data } = {pageProps};
    dispatch({type: PAGEPROPS_PUT_SUCCESS, payload: data});

  } catch(error) {

    dispatch({type: PAGEPROPS_PUT_FAIL, payload: error.message});

  }
}

// DB Iteration: After setting page props in the application state we will upload these changes
// to the database so that this can replace some useSelector methods in components. 

const getPageProps = () => async (dispatch) => {

  dispatch({type: PAGEPROPS_GET_REQUEST});

  try {

    const { data } = {};
    dispatch({type: PAGEPROPS_GET_SUCCESS, payload: data});

  } catch(error) {

    dispatch({type: PAGEPROPS_GET_FAIL, payload: error.message});

  }
}



export { setPageProps, updatePageProps, getPageProps };