import React, { useState, useRef } from 'react';
import { View, TextInput as RNTextInput, Keyboard } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { stylesOTP } from './stylesUsuario'
import { PublicStackParamList } from '../../routes/types';

type OTPLoginRouteProp = RouteProp<PublicStackParamList, 'OTPLogin'>;


export default function OTPLogin() {
    const route = useRoute<OTPLoginRouteProp>();
    const { email } = route.params;
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

            <Button mode="contained" style={stylesOTP.button}>
                Verificar
            </Button>
        </View>
    )
};