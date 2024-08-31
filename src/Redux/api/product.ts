import { baseApi } from "./baseApi";

const ProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: ({ page = 1, perPage = 20 }: any = {}) => ({
        url: "/api/v2/get-cars",
        method: "POST",
        body: {
          api_token:
            "cbb592fc92ce94becb1a0dac0f64471c6aa3ca717e83b1c374871b84ee63be50",
          per_page: perPage,
          page: page,
        },
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = ProductApi;
