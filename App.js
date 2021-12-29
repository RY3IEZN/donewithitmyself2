/** @format */

import React from "react";
import { Button, Text } from "react-native";
import Screen from "./apps/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./apps/navigation/AuthNavigator";
import RegisterScreen from "./apps/RegisterScreen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>tweets</Text>
    <Button
      title="next page"
      onPress={() => navigation.navigate("TweetDetails", { id: 2 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Here are some tweets to read always {route.params.id}</Text>
  </Screen>
);

const Page2 = ({ route }) => (
  <Screen>
    <Text>Here are some tweets on page 2</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    options={{
      headerStyle: { backgroundColor: "lightblue" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
      name="TweetDetails"
      component={TweetDetails}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
      name="feed"
      component={StackNavigator}
    />
    <Tab.Screen name="home" component={Page2} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
