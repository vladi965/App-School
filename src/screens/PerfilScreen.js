import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";


const img1 = require("../assets/perfil/calificacion.png");
const img2 = require("../assets/perfil/notas.png");
const img3 = require("../assets/perfil/profesor.png");
const img4 = require("../assets/perfil/student.png");
const img5 = require("../assets/perfil/sylabus.png");


export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.principalPerfil}>
        <View style={styles.contentBoxPerfil}>
          <Image style={styles.imagePerfil} source={img4} />
          <Text style={styles.temh1}>Eduardo Huaroc</Text>
          <Text style={styles.temh3}>4° Secundaria</Text>
        </View>
      </View>
      <View style={styles.principalContent}>
        <View style={styles.contentBoxGeneral}>
          <Image style={styles.imageSylabus} source={img5} />
          <Text style={styles.temp1}>Sylabus</Text>
        </View>
        <View style={styles.contentBoxGeneral}>
          <Image style={styles.imageCalifica} source={img1} />
          <Text style={styles.temp1}>Calificaciones</Text>
        </View>
      </View>
      <View style={styles.principalContent}>
        <View style={styles.contentBoxGeneral}>
          <Image style={styles.imageDocente} source={img3} />
          <Text style={styles.temp1}>Profesor</Text>
        </View>
        <View style={styles.contentBoxGeneral}>
          <Image style={styles.imageNotas} source={img2} />
          <Text style={styles.temp1}>Notas</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}