import { setSearchInput } from "./actions";

export const setSearch = (value) => {
  return (dispatch) => {
    dispatch(setSearchInput(value))
  }
};