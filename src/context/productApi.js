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
  }),
})

export const {
    useGetProductQuery
} = productApi