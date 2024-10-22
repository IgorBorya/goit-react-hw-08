import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  number: Yup.string().required("Number is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field type="text" id="name" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field type="text" id="number" name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
          <button type="submit" className={css.button} disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
