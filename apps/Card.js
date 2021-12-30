/** @format */

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 5,
  },
  title: {
    marginBottom: 7,
    paddingLeft: 5,
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
    paddingLeft: 5,
  },
});

export default Card;
