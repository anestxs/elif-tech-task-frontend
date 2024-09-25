import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./EventRegistrationPage.module.css";
import { useId, useState } from "react";
import { Calendar } from "primereact/calendar";
import { addParticipant } from "../../redux/participants/participantsOps";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

export default function EventRegistrationPage() {
  const { eventId } = useParams();
  const nameFieldId = useId();
  const emailFieldId = useId();

  const dispatch = useDispatch();
  const [date, setDate] = useState(null);

  const handleSubmit = (values, actions) => {
    dispatch(
      addParticipant({ eventId, participant: { ...values, dateOfBirth: date } })
    );
    actions.resetForm();
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="name"
              name="name"
              id={nameFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              component="p"
              name="name"
            ></ErrorMessage>
          </div>
          <div className={css.wrapper}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={css.input}
              type="email"
              name="email"
              id={emailFieldId}
            ></Field>
            <ErrorMessage
              className={css["error-text"]}
              component="p"
              name="email"
            ></ErrorMessage>
          </div>
          <div className={css.wrapper}>
            <Calendar
              className={css.calendar}
              value={date}
              onChange={(e) => setDate(e.value)}
              dateFormat="yy-mm-dd"
            />
          </div>
          <button type="submit" className={css.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
