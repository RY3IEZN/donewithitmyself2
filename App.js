/** @format */

// symbol polyfills
global.Symbol = require("core-js/es6/symbol");
require("core-js/fn/symbol/iterator");
require("core-js/fn/map");
require("core-js/fn/set");
require("core-js/fn/array/find");

import React, { useEffect, useState } from "react";
import Screen from "./apps/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button, Image } from "react-native";
import ImageInput from "./apps/ImageInput";
import ImageInputList from "./apps/ImageInputList";
import ListingEditScreen from "./apps/ListingEditScreen";
import ListingsScreen from "./apps/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
