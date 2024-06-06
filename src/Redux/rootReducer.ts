import FilterSlice from "./Slices/FilterSlice";
import authReducer from "./Slices/authSlice";
import inventorySlice from "./Slices/inventorySlice";
import utilitySlice from "./Slices/unitlitySlice";

import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
  filterSlice: FilterSlice,
  inventorySlice: inventorySlice,
  unitlitySlice: utilitySlice,
};

export default rootReducer;
