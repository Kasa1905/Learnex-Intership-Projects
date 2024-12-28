import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const history = useHistory();

  const initialValues = {
    name: '',
    description: '',
    price: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Pizza name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive')
  });

  const onSubmit = (values) => {
    axios.post('http://localhost:5000/pizzas', values)
      .then(() => {
        history.push('/display'); // Redirect to the display page
      })
      .catch(error => console.error('Error adding pizza:', error));
  };

  return (
    <div className="container">
      <h1>Add New Pizza</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Pizza Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary mt-3">Add Pizza</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;
