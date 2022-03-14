import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';
const initialState = {
  cartData: [],
};
export default function cartItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      //   console.warn('reducer', action);
      return [...state, { cartData: state.data }];
    case REMOVE_TO_CART:
      state.pop();
      //   console.warn('reducer', action);

      return [...state];
    default:
      return state;
  }
}
