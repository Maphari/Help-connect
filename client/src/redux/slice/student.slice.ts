import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
  studentID: string;
  username: string;
  email: string;
}

const initialState: IInitialState = {
  studentID : "",
  username: "",
  email: "",
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    SetStudentID: (state, action) => {
      state.studentID = action.payload;
    },
    SetUsername: (state, action) => {
      state.username += action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { SetStudentID, SetUsername, SetEmail } = studentSlice.actions;

export default studentSlice.reducer;
