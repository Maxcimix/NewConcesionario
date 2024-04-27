import React from "react";
import {View, StyleSheet } from "react-native";
import globalStyles from '../styles/global'
import {Container, Button, Text} from 'native-base'
import { useNavigation } from '@react-navigation/native'
//import { globalStyles } from '../styles/global';



const NuevaOrden = () => {
    const navigation = useNavigation();
    return (
        <Container style = {globalStyles.contenedor} >
            <View style = {globalStyles.contenido}>
                <Button
                style = {globalStyles.button}
                   onPress={() => navigation.navigate('Home')} 
                >
                    <Text style = { globalStyles.buttonText}
                    >Crear una Orden</Text>
                </Button>
            </View>
        </Container>
    )
}

// 
export default NuevaOrden;