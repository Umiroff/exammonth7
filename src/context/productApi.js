import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (params) => ({ 
        url: '/products' ,
        params
      }),
      providesTags:["Product"]
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `products/${id}`,
      }),
      providesTags: ["Product"]
    }),
  }),
})

export const {
    useGetProductQuery,
    useGetProductByIdQuery
} = productApi