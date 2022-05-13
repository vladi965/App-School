import React from "react";
import { StyleSheet, View, Text, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable  from "react-native-animatable";

const LogoSplash = require("../assets/logo/buho.png");

const SplashLogo = () => {
  return (
    <SafeAreaView>
      <View>
        <Animatable.View animation="slideInDown" iterationCount="infinite" direction="alternate">
          <Image style={styles.logo} source={LogoSplash} resizeMode="contain" />
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 350,
    width: 130,
    height: 130,
  },
});

export default SplashLogo;
