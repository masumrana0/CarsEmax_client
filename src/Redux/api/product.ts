import build from "next/dist/build";
import { baseApi } from "./baseApi";

const ProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = ProductApi;
