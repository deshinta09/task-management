import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import instance from "../config/instance";
import axios from "axios";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [],
    detail: {},
  },
  reducers: {
    setTask: (state, action) => {
      state.list = action.payload;
    },
    setDetailTask: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setTask, setDetailTask } = taskSlice.actions;

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      let response = await instance({ method: "get", url: "/tasks" });
      // console.log(response.data, "<< data fetch");

      dispatch(setTask(response.data));
    } catch (error) {
      console.log(error, "<-err fetch task");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
};

export const fetchTaskById = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await instance({ method: "get", url: `/tasks/${id}` });
      dispatch(setDetailTask(data));
    } catch (error) {
      console.log(error, "<-err fetch task by id");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
};

export default taskSlice.reducer;
