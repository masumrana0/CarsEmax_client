import { IProduct } from "@/Interface/common";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  isProductQuickView: boolean;
  quickViewProduct: IProduct | null;
}

const initialState: IinitialState = {
  isProductQuickView: false,
  quickViewProduct: null,
};

export const inventorySlice = createSlice({
  name: "inventorySlice",
  initialState,
  reducers: {
    setProductQuickView: (state) => {
      state.isProductQuickView = !state.isProductQuickView;
    },
    setQuickViewProduct: (state, action: PayloadAction<IProduct | null>) => {
      state.quickViewProduct = action.payload;
    },
  },
});

export const { setProductQuickView, setQuickViewProduct } =
  inventorySlice.actions;
export default inventorySlice.reducer;
