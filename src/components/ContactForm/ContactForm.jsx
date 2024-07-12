import s from './ContactForm.module.css'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactForm = ({ onAdd }) => {

const initialValues = {
  name: "",
  number: "",
    };

 const ContactFormSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, "Too Short! Please type min 3 symbols")
     .max(50, "Too Long! Must be up o 0 symbols")
     .required("Required"),
   number: Yup.string()
     .min(3, "Must be a valid phone number, min 3 symbols!")
     .max(50, "Too Long!")
     .matches(/^\+?[1-9]\d{1,14}$/, 'Невірний формат номеру телефона')
     .required("Required")
});   
  
  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

    const handleSubmit = (values, actions) => {
      console.log(values.name);
      console.log(values.number);
      onAdd({
      "id": nanoid(),
        "name": values.name,
        "number": values.number,
      });
		actions.resetForm();
  };

        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ContactFormSchema}>
                
            <Form className={s.form}>
              <label className={s.input_title} htmlFor={nameFieldId}>Name</label>    
              <Field className={s.field} type="text" name="name" />
              <ErrorMessage name="name" />
			      	<label className={s.input_title} htmlFor={phoneFieldId}>Number</label>  
              <Field className={s.field} type="tel" name="number" />
              <ErrorMessage name="number" />
              <button className={s.form_btn} type="submit"> Add contact </button>
            </Form>
          </Formik>
  );
};
    
export default ContactForm;