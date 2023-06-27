import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath : "mealApi", // Slice name
    tagTypes : [ "Meals", ],

    endpoints : (build) => ({

        getMeals : build.query({
            query : () => "/meals.json",
            providesTags : ["Meals"],
        })
    })
})


export const {
    useGetMealsQuery,

} = api
