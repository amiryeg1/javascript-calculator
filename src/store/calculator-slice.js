import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  input: 0,
  output: 0,
};
const numbersSlice = createSlice({
  name: "cal",
  initialState,
  reducers: {
    inputNumber: (state, action) => {
      if (state.input === 0 && action.payload !== ".") {
        state.input = +action.payload;
      } else if ((state.input + "").includes(".") && action.payload === ".") {
        // eslint-disable-next-line
        state.input = state.input;
      } else {
        state.input += action.payload;
      }
    },
    negativeOperator: (state, action) => {
      if (state.input === 0) {
        state.input = action.payload;
      }
      else {
        state.input += action.payload;
        if (state.output === 0) {
          state.output = state.input;
        } else {
          state.output += state.input;
        }
  
        state.input = 0;
      }
    },
    clearInput: (state) => {
      state.input = 0;
      state.output = 0;
    },
    addOperator: (state, action) => {
      state.input += action.payload;
      if (state.output === 0) {
        state.output = state.input;
      } else {
        state.output += state.input;
      }

      state.input = 0;
    },
    compute: (state) => {
      state.output += state.input;
      // eslint-disable-next-line
      state.output = eval(state.output);
      state.input = state.output;
      state.output = 0;
    },
  },
});

export const { inputNumber, clearInput, addOperator, compute, negativeOperator } =
  numbersSlice.actions;
export default numbersSlice.reducer;
