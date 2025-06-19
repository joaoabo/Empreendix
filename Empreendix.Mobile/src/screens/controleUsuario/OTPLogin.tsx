import React, { useState, useRef } from 'react';
import { View, TextInput as RNTextInput, Keyboard } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { stylesOTP } from './stylesUsuario'
import { PublicStackParamList } from '../../routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { validarOtp } from '../../services/authService';

type OTPLoginRouteProp = RouteProp<PublicStackParamList, 'OTPLogin'>;
type NavigationProp = NativeStackNavigationProp<PublicStackParamList, 'Home'>;


export default function OTPLogin() {
    const route = useRoute<OTPLoginRouteProp>();
    const navigation = useNavigation<NavigationProp>();
    const { email, Id_otp } = route.params;
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef<RNTextInput[]>([]);

    const handleChange = (text: string, index: number) => {
        if (text.length === 1) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (index < 5) inputs.current[index + 1]?.focus();
            else Keyboard.dismiss();
        }
    };

    const handleVerify = async () => {
        const codigo = otp.join('');
        if (codigo.length < 6) return alert('Digite os 6 dígitos');

        const sucesso = await validarOtp(Id_otp, codigo);
        console.log("Vendo resultado no arquivo OTPLogin:", sucesso)

        if (sucesso) {
            navigation.replace('Home');
        } else {
            alert('Código inválido ou expirado');
        }
    };


    return (
        <View style={stylesOTP.container}>
            <Text style={stylesOTP.title}>Olá, {email.split('@')[0]} 👋</Text>
            <Text style={stylesOTP.subtitle}>Informe o código que enviamos para seu e-mail</Text>

            <View style={stylesOTP.otpContainer}>
                {otp.map((value, index) => (
                    <RNTextInput
                        key={index}
                        ref={(ref) => void (inputs.current[index] = ref!)}
                        style={stylesOTP.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleChange(text, index)}
                        value={value}
                    />
                ))}
            </View>

            <Button mode="contained" style={stylesOTP.button} onPress={handleVerify}>
                <Text>Verificar</Text>
            </Button>
        </View>
    )
};