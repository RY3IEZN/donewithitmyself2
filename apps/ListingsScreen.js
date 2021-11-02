import React from 'react';
import { FlatList } from 'react-native';
import Screen from './Screen';
import Card from './Card';
import { StyleSheet } from 'react-native';



const listings = [
    {
        id: 1,
        title: "red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in good state",
        price: 100,
        image: require("../assets/couch.jpg")
    }
]

function ListingsScreen(props) {
    return (

        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listings => listings.id.toString()}
            renderItem= {({item}) => 
            <Card 
            title={item.title}
            subTitle={"$" + item.price} 
            image={item.image} 
            />}          
            />
        </Screen> 
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: "grey"
    }
})

export default ListingsScreen;