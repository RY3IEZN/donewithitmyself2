/** @format */

import React, { useEffect, useState } from "react";
import { FlatList, Button } from "react-native";
import Screen from "./Screen";
import Card from "./Card";
import { StyleSheet } from "react-native";
import routes from "./navigation/routes";
import listingsApi from "./api/listings";
import AppText from "./AppText";
import Appbutton from "./Appbutton";
import ActivityIndicator from "./animations/ActivityIndicator";
import listings from "./api/listings";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Coudnt fetch images from the server</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "gainsboro",
  },
});

export default ListingsScreen;
