import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../feature/userSlicer";

const store = configureStore({
  reducer: {
    users: userSliceReducer,
  },
});

export default store;
