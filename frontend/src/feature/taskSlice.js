import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import instance from "../config/instance";
import axios from "axios";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    list: [],
  },
  reducers: {
    setTask: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setTask } = taskSlice.actions;

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      //   let response = await instance({ method: "get", url: "/tasks" });
      //   let response = await axios({
      //     method: "get",
      //     url: "http://localhost:8000/api/tasks",
      //   });
      let response = await fetch("http://localhost:8000/api/tasks");
      let responseBody = await response.json();
      console.log(responseBody, "<< data fetch");

      if (response.ok) {
        dispatch(setTask(responseBody));
      } else {
        console.log(response, "<< respon error");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error to get data User",
        });
      }
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

export default taskSlice.reducer;
