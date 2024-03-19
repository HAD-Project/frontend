import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        patientId: -1,
    },
    reducers: {
        viewPatient: (state, action) => {
            state.patientId = action.payload;
        }
    }
});

export const {
    viewPatient,
} = doctorSlice.actions;

export default doctorSlice.reducer;