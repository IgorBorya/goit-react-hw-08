import React from "react";
import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contactList}>
    {contacts.length > 0 ? (
      contacts.map((contact) => (
        <li key={contact.id} className={s.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContact(contact.id)}
          />
        </li>
      ))
    ) : (
      <p className={s.noContactsMessage}>No contacts found</p>
    )}
  </ul>
);
