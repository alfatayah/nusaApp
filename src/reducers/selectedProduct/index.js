import {SELECTED_PRODUCT, DELETE_PRODUCT} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    arr: [],
  };
  
  export function selectedProduct(state = initStates, action) {
    console.log("action.type : ", action.type);
    switch (action.type) {
      case SELECTED_PRODUCT:
        return {
          ...initState,
          arr:[...state.arr, action.data]
        }
        case DELETE_PRODUCT:
          console.log("delete product");
          console.log("arr" , state.arr);
          // return {
          //   ...initState,
          //   arr:[...state.arr, action.data]
          // }
      default:
        return state;
    }
  }
  