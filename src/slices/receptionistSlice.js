import { createSlice } from "@reduxjs/toolkit";

export const receptionistSlice = createSlice({
  name: "receptionist",
  initialState: {
    patientRefresh: false,
  },
  reducers: {
    updateRefreshPatients: (state, action) => {
      state.patientRefresh = !state.patientRefresh;
    },
  },
});

export const { updateRefreshPatients } = receptionistSlice.actions;

export default receptionistSlice.reducer;
