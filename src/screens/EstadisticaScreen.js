import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";
import TopEstadistCarousel from "../components/TopEstadistCarousel";
import { CAROUSEL_LIST } from "../Data/stadistCarousel";

const img1 = require("../assets/estadistica/grafico1.png");
const img2 = require("../assets/estadistica/grafico2.png");
const img3 = require("../assets/estadistica/grafico3.png");

//Circle Img
const p1 = require("../assets/estadistica/circle1.png");
const p2 = require("../assets/estadistica/circle2.png");
const p3 = require("../assets/estadistica/circle3.png");
const p4 = require("../assets/estadistica/circle4.png");
const p5 = require("../assets/estadistica/circle5.png");

export default function EstadisticaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentView}>
        <TopEstadistCarousel list={CAROUSEL_LIST} />
      </View>
      <View style={styles.opContent}>
        <View style={styles.textp1}>
          <Text style={styles.one}>Mi Record</Text>
        </View>
        <View style={styles.contentBoxDirection}>
          <View style={styles.contentBoxTwo}>
            <View style={styles.imagenStadistc}>
              <Image style={styles.imagen} source={img1} />
            </View>
            <View style={styles.h5}>
              <Text style={styles.one1}>+50</Text>
              <Text>Ejercicios</Text>
            </View>
          </View>
          <View style={styles.contentBoxTwo}>
            <View style={styles.imagenStadistc2}>
              <Image style={styles.imagen} source={img2} />
            </View>
            <View style={styles.h5}>
              <Text style={styles.one2}>+120</Text>
              <Text>Ejercicios</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.textp1}>
            <Text style={styles.one}>Gráficos</Text>
          </View>
          <View style={styles.contentImage}>
            <Image style={styles.img3} source={img3} />
          </View>
        </View>
        <View style={styles.ContentPrimaryCircle}>
          <View style={styles.circleContent}>
            <Image style={styles.imgcircle} source={p1}/>
            <Text style={styles.r1}>Aritmetica</Text>
          </View>
          <View style={styles.circleContent}>
            <Image style={styles.imgcircle} source={p2}/>
            <Text style={styles.r1}>Algebra</Text>
          </View>
          <View style={styles.circleContent}>
            <Image style={styles.imgcircle} source={p3}/>
            <Text style={styles.r1}>Geometria</Text>
          </View>
          <View style={styles.circleContent}>
            <Image style={styles.imgcircle} source={p4}/>
            <Text style={styles.r1}>Trigonometria</Text>
          </View>
          <View style={styles.circleContent}>
            <Image style={styles.imgcircle} source={p5}/>
            <Text style={styles.r1}>RazMatematico</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
