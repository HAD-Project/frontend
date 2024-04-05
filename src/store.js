import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from "./slices/doctorSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer
  },
});