import * as actionTypes from "../actions/actionTypes";
import { arrowFunctionExpression } from "@babel/types";
import { KeyObject } from "crypto";

const initialState = {
  author: null,
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };

    case actionTypes.SET_AUTHOR_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.POST_BOOK:
      let newBooks = state.author.books.concat(action.payload);

      let newObj = {
        ...state.author,
        books: newBooks
      };

      return {
        ...state,
        author: newObj
      };

    default:
      return state;
  }
};

export default reducer;
