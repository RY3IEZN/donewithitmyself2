import React from 'react';
import { Image, View ,StyleSheet} from 'react-native';
import AppText from './AppText';
import ListItem from './ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        
        <View style={styles.detailsContainer}>
        <AppText style={styles.title}>
            Red jacket for sale
        </AppText>

        <AppText style={styles.price}>
            $100
        </AppText>

        <ListItem 
        image={require("../assets/mosh.jpg")}
        title="mosh mosh"
        subTitle="4 listings"
        />
        </View>

        </View>
    );
}


const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 300,
    },
    detailsContainer:{
        padding:20
    },
    title:{
        fontSize:24,
        fontWeight: "300"
    },
    price:{
        fontWeight: "500"
    }
    
})
export default ListingDetailsScreen;