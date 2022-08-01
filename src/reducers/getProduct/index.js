import { GET_PRODUCT_ERROR, GET_PRODUCT_PROCESS, GET_PRODUCT_SUCCESS} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    result: [],
    loading: false,
  };
  
  export function getProduct(state = initState, action) {
    switch (action.type) {
      case GET_PRODUCT_SUCCESS:
        return {
          ...initState,
          loading: true,
          result: action.result,
          error: null,
        };
      case GET_PRODUCT_PROCESS:
        return {
          ...state,
          result: action.result,
          loading: false,
          error: null,
        };
      case GET_PRODUCT_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false,
          result: null,
        };
      default:
        return state;
    }
  }
  