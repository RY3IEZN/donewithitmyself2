/** @format */

import { Text } from "react-native";
import Screen from "./apps/Screen";
import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweet = () => {
  <Screen>
    <Text> Page one</Text>
  </Screen>;
};

const TweetDetails = () => {
  <Screen>
    <Text> details of page 1 </Text>
  </Screen>;
};

const Stack = createNativeStackNavigator();
const NativeStackNavigator = () => {
  <Stack.NativeStackNavigator>
    <Stack.Screen name="tweets" components={Tweet} />
    <Stack.Screen name="tweetsdetails" components={TweetDetails} />
  </Stack.NativeStackNavigator>;
};

function App(props) {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
