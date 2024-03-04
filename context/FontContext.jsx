import React, { createContext, useState, useContext, useEffect } from 'react';
import * as Font from 'expo-font';

const FontContext = createContext();

export const useFont = () => useContext(FontContext);

const FontProvider = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Inter_900Black: require('@expo-google-fonts/inter/Inter_900Black.ttf'),
          'ProtestRiot-Regular': require('../assets/fonts/ProtestRiot-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    }
    loadFonts();
  }, []);

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider;
