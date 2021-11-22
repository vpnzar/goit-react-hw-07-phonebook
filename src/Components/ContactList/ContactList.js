// import {
//   // itemsReducer,
//   // filterReducer,
//   // errorReducer,
//   // isLoadingReducer,
// } from "../../Redux/contacts-reducer.js";
// import { deleteItem } from "../../Redux/contacts-actions";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import { getFilter } from "../../Redux/contacts-selectors";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../Services/contactsApi";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const InputValue = useSelector(getFilter);
  const { data, error, isLoading, isError } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const contactsNotFoundError = isError && error;

  useEffect(() => {
    try {
      setContacts(
        data.filter(({ name }) =>
          name.toLowerCase().includes(InputValue.toLowerCase())
        )
      );
    } catch (error) {
      return error;
    }
  }, [data, InputValue]);

  return (
    <div className={s.ContactsList}>
      {isLoading && <h2>Wait...</h2>}
      {InputValue && contacts.length === 0 && <h2>No results were found...</h2>}
      {contactsNotFoundError && <h2>Error...</h2>}
      <ul>
        {contacts &&
          contacts.map(({ name, id, phone }) => (
            <li key={id}>
              <p>{name + ": " + phone}</p>
              <button
                onClick={() => {
                  deleteContact(id);
                }}
              >
                {isDeleting ? "Deleting" : "Delete"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
