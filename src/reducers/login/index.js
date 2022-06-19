import { LOGIN_ERROR, LOGIN_PROCESS, LOGIN_SUCCESS} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    result: [],
    loading: false,
  };
  
  export function login(state = initState, action) {
    switch (action.type) {
      case LOGIN_PROCESS:
        return {
          ...initState,
          loading: true,
          result: null,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          result: action.result,
          loading: false,
          error: null,
        };
      case LOGIN_ERROR:
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
  