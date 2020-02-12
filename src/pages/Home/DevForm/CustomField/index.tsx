import React from 'react';
import { FieldInputProps, FormikProps } from 'formik';

import './styles.css';

interface Props {
  type: string;
  field: FieldInputProps<string>;
  form: FormikProps<string>;
  label: string;
}

const CustomField = ({
  type, field, form, label,
}: Props) => {
  const {
    name, value, onChange, onBlur,
  } = field;

  return (
    <label htmlFor={field.name}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  );
};

export default CustomField;
