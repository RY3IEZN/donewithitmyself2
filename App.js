import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Style, TextInput, Switch } from 'react-native';
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
import AppTextInputBox from './apps/AppTextInputBox';
import AppPicker from './apps/AppPicker';

export default function App() {


  const [isNew, setIsNew] = useState(false);

  return (
    
    <Screen>

<AppPicker icon="apps" placeholder="Category"/>
<AppTextInputBox icon="email" placeholder="email" />


  </Screen>



  ); 
}
