/** @format */

import React from "react";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageuris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageuris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageuris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageuris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
