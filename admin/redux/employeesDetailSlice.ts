import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//type

const initialState = {
  loading: false,
  employeesDetail: [],
  error: null,
};

//addNewEmployee
export const addNewEmployee = createAsyncThunk("addNewEmployee", async (newEmployee) => {
  try {
    const response = await axios.post("http://localhost:4000/api/employeeDetail/add", {newEmployee});
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//fetchAllEmployeesDetail
export const fetchAllEmployeesDetail = createAsyncThunk("employeesDetail/getAll", async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/employeeDetail/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//employeesDetailSlice
export const employeesDetailSlice = createSlice({
  name: "employees_detail",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(fetchAllEmployeesDetail.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(fetchAllEmployeesDetail.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = action.payload;
        state.error = null;
      }),
      builder.addCase(fetchAllEmployeesDetail.rejected, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = [];
        state.error = action.error.message;
      });

    //addNewEmployee
    builder.addCase(addNewEmployee.pending, (state: any) => {
      state.loading = true;
    }),
      builder.addCase(addNewEmployee.fulfilled, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = [action.payload];
        state.error = null;
      }),
      builder.addCase(addNewEmployee.rejected, (state: any, action: any) => {
        state.loading = false;
        state.employeesDetail = [];
        state.error = action.error.message;
      });
  },
} as any);

export const { reducer: employeesDetailReducer, actions: employeesDetailAction } = employeesDetailSlice;
