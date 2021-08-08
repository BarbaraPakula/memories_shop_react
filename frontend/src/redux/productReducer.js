import axios from "axios";
//actions names
const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

const GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCT_DETAILS_REQUEST";
const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS";
const GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCT_DETAILS_FAIL";
const GET_PRODUCT_DETAILS_RESET = "GET_PRODUCT_DETAILS_RESET";

/* action creators */
export const getProductsReques = (payload) => ({
  payload,
  type: GET_PRODUCTS_REQUEST,
});
export const getProductsSuccess = (payload) => ({
  payload,
  type: GET_PRODUCTS_SUCCESS,
});
export const getProductsFail = (payload) => ({
  payload,
  type: GET_PRODUCTS_FAIL,
});
export const getProductDetailsRequest = (payload) => ({
  payload,
  type: GET_PRODUCT_DETAILS_REQUEST,
});
export const getProductDetailsSuccess = (payload) => ({
  payload,
  type: GET_PRODUCT_DETAILS_SUCCESS,
});
export const getProductDetailsFail = (payload) => ({
  payload,
  type: GET_PRODUCT_DETAILS_FAIL,
});
export const getProductDetailsReset = (payload) => ({
  payload,
  type: GET_PRODUCT_DETAILS_RESET,
});
/* thunk creators */

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(getProductsReques());

    const { data } = await axios.get("http://localhost:8000/api/products");
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(
      getProductsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(getProductDetailsRequest());

    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    dispatch(getProductDetailsSuccess(data));
  } catch (error) {
    dispatch(
      getProductDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch(getProductDetailsRequest());
};

/* reducer */

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
