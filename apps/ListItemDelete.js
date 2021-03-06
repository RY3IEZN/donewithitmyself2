import React from 'react';
import { View , StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons 
            name="trash-can"
            size={35}
            color="black" 
            />
        </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        width:70,
        justifyContent:"center",
        alignItems:"center",
    }
    
})
export default ListItemDelete;