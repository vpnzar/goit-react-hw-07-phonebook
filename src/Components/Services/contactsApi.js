import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6192c7f3d3ae6d0017da82b6.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contacts", id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
