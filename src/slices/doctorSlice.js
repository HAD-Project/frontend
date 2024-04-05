import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        patientId: -1,
        userName: "",
    },
    reducers: {
        viewPatient: (state, action) => {
            state.patientId = action.payload;
        },

        updateUsername: (state, action) => {
            state.userName = action.payload;
        }
    }
});

export const {
    viewPatient,
    updateUsername,
} = doctorSlice.actions;

export default doctorSlice.reducer;