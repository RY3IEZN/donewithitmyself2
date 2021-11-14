/** @format */

import React from "react";
import { useFormikContext } from "formik";
import Appbutton from "./Appbutton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Appbutton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
