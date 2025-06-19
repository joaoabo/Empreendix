import React from 'react';
import { Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default function GraficosBarras() {
    const screenWidth = Dimensions.get('window').width - 32;
    
      const data = {
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
        datasets: [
          {
            data: [5, 8, 6, 4, 10],
          },
        ],
      };
    return(
        <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="R$"
                yAxisSuffix=""
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#806a99',
                  backgroundGradientTo: '#806a99',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(34, 6, 65, ${opacity})`,
                  labelColor: () => '#220641',
                  style: { borderRadius: 16 },
                }}
                style={{ borderRadius: 16, marginBottom: 24 }}
              />
    )
}