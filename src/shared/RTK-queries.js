import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: 'https://react-firebase-75251-default-rtdb.asia-southeast1.firebasedatabase.app/'}),
    reducerPath : "mealApi", // Slice name
    tagTypes : [ "Meals", ],

    endpoints : (build) => ({

        getMeals : build.query({
            query : () => "/meals.json",
            providesTags : ["Meals"],
        }),

        placeOrder: build.mutation({
            query : (order) => ({
                url: '/placeOrder.json',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['Meals']
        })
    })
})


export const {
    useGetMealsQuery,
    usePlaceOrderMutation,
} = api
