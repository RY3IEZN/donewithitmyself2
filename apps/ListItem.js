/** @format */

import React from "react";
import AppText from "./AppText";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  ImageComponent,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={"blue"}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.text} numberOfLines={1}>
              {title}
            </AppText>
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          </View>
          <MaterialCommunityIcons color="grey" name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {},
});

export default ListItem;
