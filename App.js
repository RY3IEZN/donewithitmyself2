import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Style } from 'react-native';
import Appbutton from './apps/Appbutton';
import ViewImageScreen from './apps/ViewImageScreen';
import WelcomeScreen from './apps/WelcomeScreen';
import ListingDetailsScreen from './apps/ListingDetailsScreen';
import ListItem from './apps/ListItem';
import Card from './apps/Card';
import MessageScreen from './apps/MessageScreen';
import Screen from './apps/Screen';
import Icon from './apps/Icon';
import AccountScreen from './apps/AccountScreen';
import ListingsScreen from './apps/ListingsScreen';


export default function App() {
  return (

    <ListingsScreen />

  ); 
}
