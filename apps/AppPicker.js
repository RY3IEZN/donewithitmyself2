import React, { useState } from 'react';
import { TextInput, View , StyleSheet, Platform, Modal, TouchableWithoutFeedback, Button} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from './AppText';
import Screen from './Screen';



function AppPicker({icon,placeholder ,...otherProps}) {
    const [modalVisible,setModalVisible] = useState(false);


    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
             name={icon}
             size={30} 
            color="black"
             style={styles.icons}
            />}

        <AppText style={styles.text}>
            {placeholder}
        </AppText>

        <MaterialCommunityIcons
             name="chevron-down"
             size={30} 
            color="black"
            />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible}
        animationType="fade">
            
        <Screen>       
        <Button title="close" onPress={() => setModalVisible(false)} />
        </Screen>
        
        </Modal>
        </React.Fragment>




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

    },
    text: {
        flex:1
    }
    
})





export default AppPicker;