import React from 'react';
import { View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { InfoCard } from '../../routes/types';




export default function CardInfo() {
    const data: {
        vendas: InfoCard[];
        orcamento: InfoCard[];
        vendasPerdidas: InfoCard[];
    } = {
        vendas: [{ titulo: 'Vendas Realizadas', resultado: 'R$ 1.250,00 em 20 pedidos' }],
        orcamento: [{ titulo: 'Orçamentos Enviados', resultado: '15 orçamentos em aberto' }],
        vendasPerdidas: [{ titulo: 'Vendas Perdidas', resultado: 'R$ 320,00 em 5 pedidos' }]
    };

    const cards = [...data.vendas, ...data.orcamento, ...data.vendasPerdidas]
    return (
        <View>
            {cards.map((item, index) => (
                <Card key={index} style={{ marginBottom: 16, backgroundColor: '#220641' }}>
                    <Card.Content>
                        <Text variant="titleMedium" style={styles.titulo}>{item.titulo}</Text>
                        <Text variant="bodyMedium" style={styles.textoValor}>{item.resultado}</Text>
                    </Card.Content>
                </Card>
            ))}
        </View>
    )
}

export const CardStatico = () => {
    return (
        <View>
            <Card style={styles.containerCard}>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#e6b800', fontSize: 21, marginBottom: 16, }}>Quer elevar seu negócio?</Text>
                    <Text style={{ color: '#fff', fontSize: 18, marginBottom: 14 }}>Gerencie tudo de forma Profissional!</Text>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Faça seu cadastro e aproveite a experiência!</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

export const styles = StyleSheet.create({
    containerCard: {
        textAlign: 'center',
        height: 150,
        marginBottom: 16,
        backgroundColor: '#333',
    },
    titulo: {
        color: '#fff',
        fontSize: 18
    },
    textoValor: {
        color: '#fff'
    }
});