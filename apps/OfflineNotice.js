/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OfflineNotice;
