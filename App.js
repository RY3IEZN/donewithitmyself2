/** @format */

import React, { useEffect, useState } from "react";
import Screen from "./apps/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, asyncstorage } from "react-native";
import ImageInput from "./apps/ImageInput";
import ImageInputList from "./apps/ImageInputList";
import ListingEditScreen from "./apps/ListingEditScreen";
import ListingsScreen from "./apps/ListingsScreen";
import Appbutton from "./apps/Appbutton";
import NetInfo from "@react-native-community/netinfo";
import LoginScreen from "./apps/LoginScreen";
import RegisterScreen from "./apps/RegisterScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./apps/OfflineNotice";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./apps/navigation/AppNavigator";
import AuthNavigator from "./apps/navigation/AuthNavigator";
import AuthContext from "./apps/auth/context";

export default function App() {
  const [user, setUser] = useState();

  NetInfo.fetch().then((netInfo) => console.log(netInfo));

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 2 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}
