import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash/SplashScreen';
import TabRoutesPublica from './tab.routes';
import OTPLogin from '../screens/controleUsuario/OTPLogin';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Tabs" component={TabRoutesPublica} />
            <Stack.Screen name="OTPLogin" component={OTPLogin} /></>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
