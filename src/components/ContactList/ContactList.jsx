import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
