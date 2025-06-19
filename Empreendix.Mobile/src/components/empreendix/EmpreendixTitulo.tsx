import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LogoTitulo from '../logo/LogoTitulo';

export default function EmpreedixTitulo() {
    return (
        <View style={styles.corArea}>
            <View style={styles.containerTitulo}>
                <LogoTitulo />
                <Text style={styles.tituloLogo}>Empreendix</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    tituloLogo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e6b800',
        marginLeft: 10
    },
    corArea: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    containerTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});