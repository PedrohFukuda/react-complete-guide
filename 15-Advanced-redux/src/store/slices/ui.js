const { createSlice } = require("@reduxjs/toolkit");

const UIInitialState = {
  isCartVisible: false,
  notification: null,
};

const UISlice = createSlice({
  name: "ui",
  initialState: UIInitialState,
  reducers: {
    showCart(state) {
      state.isCartVisible = true;
    },
    hideCart(state) {
      state.isCartVisible = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = UISlice.actions;
export default UISlice.reducer;
