import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./conexao";

export const cadastrarUsuario = async (nome: string, email: string) => {
  try {
    await api.post("/usuario/signup", {
      Nome_usu: nome,
      Email_usu: email,
    });
    return true;
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return false;
  }
};

export const gerarOtp = async (email: string) => {
  try {
    const response = await api.post("/usuario/signin", {
      Email_usu: email,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar OTP:", error);
    throw new Error("Erro ao gerar OTP");
  }
};

export const validarOtp = async (idOtp: string, codigoOtp: string) => {
  try {
    const response = await api.post('/usuario/usarotp', {
        id_otp: idOtp,
        Codigo_otp: codigoOtp,
    });

    if(response.data?.token){
        await AsyncStorage.setItem('token', response.data.token);
        return true;
    }

    return false;
  } catch (error) {
    console.error("Erro ao validar OTP:", error);
    return false;
  }
};

export const getToken = async () => {
    return await AsyncStorage.getItem('token');
};

export const logout = async () => {
    await AsyncStorage.removeItem('token');
};
