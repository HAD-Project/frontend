import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from "./slices/doctorSlice";

export default configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});