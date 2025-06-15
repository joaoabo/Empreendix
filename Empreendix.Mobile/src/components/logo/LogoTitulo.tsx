import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function LogoTitulo(){
    return(
        <View>
            <Image 
            source={require("../../assets/logots.png")} 
            style={styles.logoHome}
            resizeMode="contain" />
        </View>
    )
}

const styles = StyleSheet.create({
    logoHome: {
        height: 50,
        width: 50,
    }
});