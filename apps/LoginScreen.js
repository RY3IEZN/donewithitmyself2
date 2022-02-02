/** @format */

import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import Appbutton from "./Appbutton";
import AppTextInputBox from "./AppTextInputBox";
import Screen from "./Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "./AppText";
import ErrorMessage from "./ErrorMessage";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import AppForm from "./AppForm";
import authApi from "./api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "./auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
  };

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "email", password: "password" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="invalid email/password" visible={loginFailed} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
  },
});

export default LoginScreen;
