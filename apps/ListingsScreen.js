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
import useApi from "./Hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Coudnt fetch images from the server</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default ListingsScreen;
