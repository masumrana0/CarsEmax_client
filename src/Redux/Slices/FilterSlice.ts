import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  isFilter: boolean;
  isTableProduct: boolean;
}

const initialState: IInitialState = {
  isFilter: true,
  isTableProduct: false,
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    filterToggle: (state) => {
      state.isFilter = !state.isFilter;
    },
    productCardToggle: (state) => {
      state.isTableProduct = !state.isTableProduct;
    },
  },
});

export const { filterToggle, productCardToggle } = filterSlice.actions;
export default filterSlice.reducer;
