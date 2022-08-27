import { REPORT_SUCCESS, REPORT_PROCESS, REPORT_ERROR} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    result: [],
    loading: false,
  };
  
  export function getReport(state = initState, action) {
    switch (action.type) {
      case REPORT_SUCCESS:
        return {
          ...initState,
          loading: true,
          result: action.result,
          error: null,
        };
      case REPORT_PROCESS:
        return {
          ...state,
          result: action.result,
          loading: false,
          error: null,
        };
      case REPORT_ERROR:
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
  