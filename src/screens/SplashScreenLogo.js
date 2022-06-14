import React, { useCallback, useEffect, useState } from "react";
import { View, Image  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
/* import SplashLogo from "../components/SplashLogo"; */
import { styles } from "../styles/GlobalStyles";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const LogoSplash = require("../assets/logo/buho.png");

const SplashScreenLogo = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare(){
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (e) {
          console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () =>{
    if(appIsReady){
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if(!appIsReady){
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.contentView}>
      <Image style={styles.logo} source={LogoSplash} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
