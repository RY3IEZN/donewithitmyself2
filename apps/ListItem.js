import React from 'react';
import AppText from './AppText';
import { View, StyleSheet, Image } from "react-native";

function ListItem({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight:10
    }
});







export default ListItem;