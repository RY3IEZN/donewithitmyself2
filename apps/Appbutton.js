import React from 'react';
import { View, StyleSheet,Text ,style, TouchableOpacity} from 'react-native';

function Appbutton({title},onPress,color) {
    return (
    <TouchableOpacity style={styles.button} onPress={() => console.log("pressed")}>
            <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#99CCFF",
        borderRadius: 25,
        justifyContent:"center",
        alignItems:"center",
        padding: 15,
        width:"100%",
        marginVertical:10
    },
    text:{
        color:"black",
        fontSize:18,
        fontWeight:'bold'

    }
})

export default Appbutton;