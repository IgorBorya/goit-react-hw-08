import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Name is required"),
  number: Yup.string().min(5).max(20).required("Number is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };

        dispatch(addContact(newContact));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field type="text" id="name" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field type="text" id="number" name="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button type="submit" className={s.button} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
