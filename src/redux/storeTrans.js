import { configureStore } from "@reduxjs/toolkit";
import transSlicer from "./transactionSlicer.js";
const store = configureStore({
  reducer: {
    storeTransData: transSlicer,
  },
});

export default store;
