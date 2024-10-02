import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .min(5, "Number must be at least 5 characters")
    .max(20, "Number must be less than 20 characters")
    .required("Number is required"),
});

export const ContactForm = ({ onSubmit }) => {
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

        onSubmit(newContact);

        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label htmlFor="number" className={s.label}>
            Number
          </label>
          <Field type="text" name="number" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button type="submit" className={s.button} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
