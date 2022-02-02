/** @format */

import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "./AppText";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}></View>
      {progress < 1 ? (
        <Progress.Bar progress={progress} />
      ) : (
        <LottieView
          autoPlay
          loop={false}
          source={require("./animations/done_animate.json")}
          style={styles.animation}
          onAnimationFinish={onDone}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    width: "100px",
  },
});

export default UploadScreen;
