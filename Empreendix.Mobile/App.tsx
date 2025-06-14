import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Empreedix from './src/components/empreendix/Empreendix';
import Logo from './src/components/logo/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Logo/> */}
      <Empreedix/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220641',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
