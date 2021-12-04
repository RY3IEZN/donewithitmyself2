/** @format */

import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInputBox from "./AppTextInputBox";
import { useFormikContext } from "formik";

function AppFormField({ width, name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInputBox
        onBlur={() => setFieldTouched("name")}
        onChangeText={handleChange("name")}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
