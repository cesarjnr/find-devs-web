import React, { useEffect, useRef } from 'react';
import {
  Formik, Form, Field, FormikValues, FormikHelpers,
} from 'formik';

import './styles.css';
import CustomField from './CustomField';

interface Props {
    parentHandleSubmit(formData: FormikValues): void;
}

const DevForm = ({ parentHandleSubmit }: Props) => {
  const initialValues = useRef({
    github_username: '',
    techs: '',
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        initialValues.current = {
          ...initialValues.current,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        };
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  const handleSubmit = (values: FormikValues, { setSubmitting }: FormikHelpers<any>) => {
    parentHandleSubmit(values);

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues.current}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form>
        <Field type="text" name="github_username" label="Usuário do Github" component={CustomField} />
        <Field type="text" name="techs" label="Tecnologias" component={CustomField} />
        <div className="input-group">
          <Field type="text" name="latitude" label="Latitude" component={CustomField} />
          <Field type="text" name="longitude" label="Longitude" component={CustomField} />
        </div>
        <button type="submit">Salvar</button>
      </Form>
    </Formik>
  );
};

export default DevForm;
