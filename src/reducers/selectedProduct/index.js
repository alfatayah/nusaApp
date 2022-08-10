import {SELECTED_PRODUCT, DELETE_PRODUCT} from '../../actions';
  
  const initState = {
    result: null,
    loading: false,
  };
  
  const initStates = {
    arr: [],
  };
  
  export function selectedProduct(state = initStates, action) {
    switch (action.type) {
      case SELECTED_PRODUCT:
        return {
          ...initStates,
          arr:[...state.arr, action.data]
        }

      case DELETE_PRODUCT:
          const id = action.data.id     
          return {
            ...initStates,
            arr: state.arr.filter((arr) => arr.id !== id)

          }
      default:
        return state;
    }
  }

  