import Axios from 'axios';
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await Axios.get(`/api/product/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      pridce: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty, 
    },
  });
};