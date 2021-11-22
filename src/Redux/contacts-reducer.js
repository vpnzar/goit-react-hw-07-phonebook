import { createReducer } from "@reduxjs/toolkit";

export const filterReducer = createReducer("", {
  "list/filter": (_, { payload }) => payload,
});

// const initState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const itemsReducer = createReducer(initState, {
//   'form/submit': (state, { payload }) => [...state, payload],
//   'list/delete': (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });
