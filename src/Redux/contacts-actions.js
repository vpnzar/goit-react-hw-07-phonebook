import { createAction } from "@reduxjs/toolkit";

// export const fetchContactsRequest = createAction(
//   'contacts/fetchContactsRequest',
// );
// export const fetchContactsSuccess = createAction(
//   'contacts/fetchContactsSuccess',
// );
// export const fetchContactsError = createAction('contacts/fetchContactsError');

// export const submitForm = createAction('form/submit');
// export const deleteItem = createAction('list/delete');
export const filterItems = createAction("list/filter");
