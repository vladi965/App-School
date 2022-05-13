import React from "react";
import { View  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashLogo from "../components/SplashLogo";
import { styles } from "../styles/GlobalStyles";

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.contentView}>
        <SplashLogo />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
