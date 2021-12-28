/** @format */

import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Screen from "./Screen";
import Card from "./Card";
import { StyleSheet } from "react-native";
import listingsApi from "./api/listings";

function ListingsScreen(props) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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
