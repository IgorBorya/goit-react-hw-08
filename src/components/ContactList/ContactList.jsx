import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className={s.contactList}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className={s.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))
      ) : (
        <p className={s.noContactsMessage}>No contacts found</p>
      )}
    </ul>
  );
};
