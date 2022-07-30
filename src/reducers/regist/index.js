import { REGIST_ERROR,REGIST_PROCESS, REGIST_SUCCESS} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    result: [],
    loading: false,
  };
  
  export function register(state = initState, action) {
    switch (action.type) {
      case REGIST_PROCESS:
        return {
          ...initState,
          loading: true,
          result: null,
          error: null,
        };
      case REGIST_SUCCESS:
        return {
          ...state,
          result: action.result,
          loading: false,
          error: null,
        };
      case REGIST_ERROR:
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
  