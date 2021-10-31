import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Style } from 'react-native';
import Appbutton from './apps/Appbutton';
import ViewImageScreen from './apps/ViewImageScreen';
import WelcomeScreen from './apps/WelcomeScreen';
import ListingDetailsScreen from './apps/ListingDetailsScreen';
import ListItem from './apps/ListItem';
import Card from './apps/Card';


export default function App() {
  return (
    
    <View style={{
      backgroundColor : "#f8f4f4",
      padding : 20,
      paddingTop : 100
    }}>
      <Card 
      title="red jacket fpr sale"
      subTitle="$100"
      image={require("./assets/jacket.jpg")} />

    </View>

  );
}
