import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./feature/taskSlice";

export default configureStore({
  reducer: { task: taskSlice },
});
