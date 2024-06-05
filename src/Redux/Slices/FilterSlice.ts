import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  isFilter: boolean;
}

const initialState: IInitialState = {
  isFilter: true,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    filterToggle: (state) => {
      state.isFilter = !state.isFilter;
    },
  },
});

export const { filterToggle } = filterSlice.actions;
export default filterSlice.reducer;
