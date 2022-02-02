/** @format */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../ListingsScreen";
import ListingDetailsScreen from "../ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Listings"
      component={ListingsScreen}
    />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
