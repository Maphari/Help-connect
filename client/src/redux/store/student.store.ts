import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import studentSlice from "../slice/student.slice";

export const store: ToolkitStore = configureStore({
  reducer: {
    student: studentSlice,
  },
});
