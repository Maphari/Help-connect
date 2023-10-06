import { createSlice } from "@reduxjs/toolkit";



interface IInitialState {
  username: string;
  email: string;
}

const initialState: IInitialState = {
  username: "",
  email: "",
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    SetUsername: (state, action) => {
      state.username += action.payload;
    },
    SetEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { SetUsername, SetEmail } = studentSlice.actions;

export default studentSlice.reducer;
