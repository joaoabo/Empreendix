import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Empreedix() {
    return (
        <View>
            <Text style={styles.titulo}>
                Empreendix
            </Text>
        </View>
    )
};
const styles = StyleSheet.create({
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e6b800'
    }
});