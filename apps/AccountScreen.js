/** @format */

import React from "react";
import Screen from "./Screen";
import ListItem from "./ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "./Icon";
import ListItemSeperator from "./ListItemSeperator";
import { NavigationContainer } from "@react-navigation/native";

const menuItems = [
  {
    title: "my listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#99CCFF",
    },
  },
  {
    title: "my message",
    icon: {
      name: "email",
      backgroundColor: "green",
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="mosh hamedan"
          subTitle="prograamingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="log out"
        ImageComponent={<Icon name="logout" backgroundColor="red" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
});

export default AccountScreen;
