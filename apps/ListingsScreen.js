/** @format */

import React, { useEffect } from "react";
import { FlatList } from "react-native";
import Screen from "./Screen";
import Card from "./Card";
import { StyleSheet } from "react-native";
import { listings } from "./api/listings";

function ListingsScreen(props) {
  const [listings, setListings] = usestate([]);

  useEffect(() => {
    listingsApi.getListings();
  }, []);

  const loadListings = async () => {};

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "grey",
  },
});

export default ListingsScreen;
