import css from "./Contact.module.css";

export const Contact = ({ name, number, onDelete }) => (
  <div className={css.contact}>
    <p>{name}</p>
    <p>{number}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);
