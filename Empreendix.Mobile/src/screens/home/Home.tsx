import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './stylesHome';
import GraficosBarras from '../../components/graficos/GraficoBarras';
import CardInfo, { CardStatico } from '../../components/cards/CardInfo';

export default function Home() {
  

  return (
    <ScrollView style={styles.containerScroll} contentContainerStyle={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16, color: '#220641', fontSize: 25, fontWeight: 'bold' }}>
        Gerencie seu Negócio. Login feito
      </Text>
      <GraficosBarras/>
      <CardInfo/>
      <CardStatico/>
    </ScrollView>
  );
}