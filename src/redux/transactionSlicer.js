import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transData: [],
};

const transactionSlicer = createSlice({
  name: "transData",
  initialState,
  reducers: {
    getTransactionRedux: (state, action) => {
      state.transData = action.payload;
    },
  },
});

const { reducer, actions } = transactionSlicer;
export const { getTransactionRedux } = actions;
export default reducer;
