import { BOOKING_ERROR, BOOKING_PROCESS, BOOKING_SUCCESS} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    result: [],
    loading: false,
  };
  
  export function booking(state = initState, action) {
    switch (action.type) {
      case BOOKING_PROCESS:
        return {
          ...initState,
          loading: true,
          result: null,
          error: null,
        };
      case BOOKING_SUCCESS:
        return {
          ...state,
          result: action.result,
          loading: false,
          error: null,
        };
      case BOOKING_ERROR:
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
  