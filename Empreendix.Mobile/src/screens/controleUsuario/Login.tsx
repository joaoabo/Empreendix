// src/screens/controleUsuario/Login.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { styles } from './stylesUsuario';
import Logo from '../../components/logo/Logo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PublicStackParamList } from '../../routes/types';
import { login } from '../../services/authService';

type NavigationProp = NativeStackNavigationProp<PublicStackParamList, 'OTPLogin'>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');

  const handleNext = async () => {
    try {
      const { id } = await login(nome, email);
      navigation.navigate('OTPLogin', { email, Id_otp: id });
    } catch (error) {
      console.error(error);
      alert('Erro ao iniciar o login');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Bem-vindo 👋</Text>
      <Text style={styles.subtitle}>Digite seu Nome</Text>

      <TextInput
        label="Digite seu nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <Text style={styles.subtitle}>Digite seu e-mail para entrar</Text>
      <TextInput
        label="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <Button
        mode="contained"
        onPress={handleNext}
        style={styles.button}
        disabled={!email.includes('@')}
      >
        <Text>Próximo</Text>
      </Button>
    </View>
  )
}
