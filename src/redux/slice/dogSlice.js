import {
  asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  dog: "",
};

export const getDogs = createAsyncThunk("/dogs", async () => {
  try {
    const res = axios.get("https://dog.ceo/api/breeds/image/random");
    // console.log("responce", res);
    toast.promise(res, {
      loading: "Loading dog picture",
      success: "Got the data",
      error: "Sorry something wrong",
    });
    return (await res).data.message;
  } catch (err) {
    console.log(err);
  }
});

const dogSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDogs.fulfilled, (state, action) => {
      console.log(action.payload);
      state.dog = action.payload;
    });
  },
});

export default dogSlice.reducer;
