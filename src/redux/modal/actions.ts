export const SET_SHOW_MODAL = "modal/SHOW_MODAL";
export const SET_HIDE_MODAL = "modal/HIDE_MODAL";

export const setShowModal = (id?: number) => ({
  type: SET_SHOW_MODAL,
  id,
});

export const setHideModal = () => ({
  type: SET_HIDE_MODAL,
});