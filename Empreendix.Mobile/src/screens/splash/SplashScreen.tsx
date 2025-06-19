import { View, StyleSheet } from 'react-native';
import Logo from '../../components/logo/Logo';
import Empreedix from '../../components/empreendix/Empreendix';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Empreedix />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220641',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
