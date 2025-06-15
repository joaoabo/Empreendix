import React from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { styles } from './stylesHome';

export default function HomeAcesso() {
  const screenWidth = Dimensions.get('window').width - 32;

  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    datasets: [
      {
        data: [5, 8, 6, 4, 10],
      },
    ],
  };

  return (
    <ScrollView style={styles.containerScroll} contentContainerStyle={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16, color: '#220641', fontSize: 25, fontWeight: 'bold' }}>
        Gerencie seu Negócio
      </Text>

      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="R$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(34, 6, 65, ${opacity})`,
          labelColor: () => '#220641',
          style: { borderRadius: 16 },
        }}
        style={{ borderRadius: 16, marginBottom: 24 }}
      />

      <Card style={{ marginBottom: 16, backgroundColor: '#220641' }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ color: '#fff', fontSize: 18}}>Vendas Realizadas</Text>
          <Text variant="bodyMedium" style={{ color: '#fff'}}>R$ 1.250,00 em 20 pedidos</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16, backgroundColor: '#220641' }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ color: '#fff', fontSize: 18}}>Orçamentos Enviados</Text>
          <Text variant="bodyMedium" style={{ color: '#fff'}}>15 orçamentos em aberto</Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16, backgroundColor: '#220641' }}>
        <Card.Content>
          <Text variant="titleMedium" style={{ color: '#fff', fontSize: 18}}>Vendas Perdidas</Text>
          <Text variant="bodyMedium" style={{ color: '#fff'}}>R$ 320,00 em 5 pedidos</Text>
        </Card.Content>
      </Card>

      <Card style={styles.containerCard}>
        <Card.Content style={{ alignItems: 'center'}}>
          <Text style={{ color: '#e6b800', fontSize: 21, marginBottom: 16,}}>Quer elevar seu negócio?</Text>
          <Text style={{ color: '#fff', fontSize: 18, marginBottom: 14}}>Gerencie tudo de forma Profissional!</Text>
          <Text style={{ color: '#fff', fontSize: 18}}>Faça seu cadastro e aproveite a experiência!</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
