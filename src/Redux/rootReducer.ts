import authReducer from "./Slices/authSlice";

import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  authSlice: authReducer,
};

export default rootReducer;
   