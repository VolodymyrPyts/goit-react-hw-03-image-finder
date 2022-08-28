import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const nandleSubmit = (values, action) => {
    onSubmit(values);
    action.resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ search: '' }} onSubmit={nandleSubmit}>
        <Form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <Field
            name="search"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
