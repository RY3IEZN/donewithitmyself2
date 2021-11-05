/** @format */

import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import Appbutton from "./Appbutton";
import AppTextInputBox from "./AppTextInputBox";
import Screen from "./Screen";
import { Form, Formik } from "formik";

function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />;
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInputBox
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInputBox
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyBoardType="Password"
              onChangeText={handleChange("password")}
              placeholder="password"
              secureTextEntry
              textContentType="password"
            />
            <Appbutton title="logout" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
