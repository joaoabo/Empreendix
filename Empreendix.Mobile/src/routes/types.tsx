export type PublicStackParamList = {
  Login: undefined;
  OTPLogin: { email: string; Id_otp: string };
  Home: undefined;
};

export type TabParamList = {
  Home: undefined;
  Login: undefined;
};


export type InfoCard = {
        titulo: string;
        resultado: string;
    };