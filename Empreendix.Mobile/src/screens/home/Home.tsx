import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './stylesHome'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Teste!</Text>
      <StatusBar style="auto" />
    </View>
  );
}