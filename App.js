/** @format */

import React from "react";
import { Button, Text } from "react-native";
import Screen from "./apps/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>tweets</Text>
    <Button title="next page" onPress={() => navigation.push("TweetDetails")} />
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Here are some tweets to read always</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ABCDEF" component={Tweets} />
    <Stack.Screen name="problems" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
