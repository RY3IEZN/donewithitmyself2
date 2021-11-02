import React from 'react';
import AppText from './AppText';
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity , TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'


function ListItem({title,subTitle,image,onPress,ImageComponent,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        onPress={onPress}
        underlayColor={"blue"}>
        <View style={styles.container}>
            {ImageComponent}
         {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailContainer}>
                <AppText>{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 10,
        backgroundColor: "white"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    detailContainer:{
        marginLeft:10
    }
});







export default ListItem;