import React from 'react';
import { TextInput, View , StyleSheet, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInputBox({icon, ...otherProps}) {
    return (

        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={30} 
            color="black" style={styles.icons}
            />}


            <TextInput  style={styles.textInput} {...otherProps}


             /> 
   
 
        </View>




    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"#D3D3D3",
        borderRadius:25,
        flexDirection:'row',
        width:"100%",
        padding:15,
        marginVertical:10

    },
    textInput: {
        fontSize:18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icons:{
         
    }
    
})





export default AppTextInputBox;