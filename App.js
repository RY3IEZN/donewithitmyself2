/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Style,
  TextInput,
  Switch,
  Image,
} from "react-native";
import Appbutton from "./apps/Appbutton";
import ViewImageScreen from "./apps/ViewImageScreen";
import WelcomeScreen from "./apps/WelcomeScreen";
import ListingDetailsScreen from "./apps/ListingDetailsScreen";
import ListItem from "./apps/ListItem";
import Card from "./apps/Card";
import MessageScreen from "./apps/MessageScreen";
import Screen from "./apps/Screen";
import Icon from "./apps/Icon";
import AccountScreen from "./apps/AccountScreen";
import ListingsScreen from "./apps/ListingsScreen";
import AppTextInputBox from "./apps/AppTextInputBox";
import AppPicker from "./apps/AppPicker";
import LoginScreen from "./apps/LoginScreen";
import AppFormPicker from "./apps/AppFormPicker";
import ListingEditScreen from "./apps/ListingEditScreen";
import PickerItem from "./apps/PickerItem";

import * as ImagePicker from "expo-image-picker";
import ImageInput from "./apps/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("you need to give permissions");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("coudnt read library", error);
    }
  };

  return (
    <Screen>
      <Appbutton title="Select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} Style={{ width: 200, height: 100 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
