import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        patient: {
            name: "Test Name",
            age: "22",
            gender: "M",
            abhaId: "69696969696969",
        }
    },
    reducers: {
        viewPatient: (state, action) => {
            state.patient = action.payload;
        }
    }
});

export const {
    viewPatient,
} = doctorSlice.actions;

export default doctorSlice.reducer;