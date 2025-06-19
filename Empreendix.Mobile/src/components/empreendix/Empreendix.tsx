import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Empreedix() {
    return (
        <View>
            <Text style={styles.tituloHome}>Empreendix</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    tituloHome: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e6b800'
    }
});