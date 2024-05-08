import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from "./slices/doctorSlice";
import userReducer from "./slices/userSlice";
import receptionistSlice from './slices/receptionistSlice';

export default configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer,
    receptionist:receptionistSlice
  },
});