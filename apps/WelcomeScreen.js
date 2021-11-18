import React from 'react';
import { Image, ImageBackground,StyleSheet,Text,View} from 'react-native';
import Appbutton from './Appbutton';
import Appbutton2 from './Appbutton2';

function WelcomeScreen(props) { 
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text>you are doing better well</Text>
            </View>
            <View style={styles.buttonContainer}>
            <Appbutton title="Login"/>
            <Appbutton2 title="register"/>
          
          </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    registerButton :{
        width: "100%",
        height: 70,
        backgroundColor: "blue",

    },
    logo:{
        width: 100,
        height: 100,
    },
    logoContainer:{
        width: 100,
        height: 100,
        position:"absolute",
        top:50
    },
    buttonContainer:{
        width: '95%'
    }
,})


export default WelcomeScreen;