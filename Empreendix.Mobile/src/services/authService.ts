import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./conexao";

export const verificarEmail = async (nome: string, email: string) => {
  console.log("Chamando verificarEmail com:", nome, email);
  try {
    await api.post("/usuario/signup", {
      Nome_usu: nome,
      Email_usu: email,
    });
    console.log("Usuário criado com sucesso ou já existente.");
    return true;
  } catch (error: any) {
    console.log("Erro no verificarEmail:", error.response?.data ?? error.message ?? error);
    if (error.response?.status !== 409) {
      throw new Error("Email invalido aqui!");
    }
  }
  console.log("Usuário já existe, continuando login...");
  return true;
};

export const login = async (nome: string, email: string) => {
  await verificarEmail(nome, email);
  console.log("verifando emal!", verificarEmail(nome, email))

  try {
    const response = await api.post("/usuario/signin", {
      Email_usu: email,
    });
    console.log("estamos aqui", response)
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar OTP:", error);
    throw new Error("Erro ao gerar OTP");
  }
};

export const validarOtp = async (idOtp: string, codigoOtp: string) => {
  try {
    const response = await api.post("/usuario/usarotp", {
      Id_otp: idOtp,
      Codigo_otp: codigoOtp,
    });

    console.log("Resposta da API ao validar OTP:", response.data);
    console.log("validando codigo OTP:", {idOtp, codigoOtp})
    if (response.data?.token) {
      await AsyncStorage.setItem('token', response.data.token);
      console.log("Verificando token", response.data.token)
      await AsyncStorage.setItem('usuarioId', String(response.data.usuarioId));
      console.log("Verificando token", String(response.data.usuarioId))
      return true;
    }
console.log("Verificando token", response.data.token)
    return false;
  } catch (error) {
    console.error("Erro ao validar OTP:", error);
    return false;
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem("token");
};
