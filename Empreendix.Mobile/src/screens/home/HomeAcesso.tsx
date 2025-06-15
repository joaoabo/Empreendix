import { Text, View } from 'react-native';
import { styles } from './stylesHome'
import Logo from '../../components/logo/Logo';
import Empreedix from '../../components/empreendix/Empreendix';

export default function HomeAcesso() {
  return (
    <View style={styles.container}>
      <Logo />
      <Empreedix />
    </View>
  );
}