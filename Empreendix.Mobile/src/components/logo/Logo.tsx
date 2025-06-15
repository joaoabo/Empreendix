import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Logo(){
    return(
        <View>
            <Image source={require("../../assets/logots.png")} style={styles.logoHome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logoHome: {
        height: 200,
        width: 200,
    }
});