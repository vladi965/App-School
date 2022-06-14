import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/GlobalStyles";


const img1 = require("../assets/perfil/califications.png");
const img2 = require("../assets/perfil/notas.png");
const img3 = require("../assets/perfil/profesor.png");
const img4 = require("../assets/perfil/students.png");
const img5 = require("../assets/perfil/sylabus.png");


export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.contentBoxPerfil}>
          <Image style={styles.imagePerfil} source={img4} />
          <Text>Eduardo Bardales</Text>
          <Text>4° Secundaria</Text>
        </View>
      </View>
      <View>
        <View>
          <Image style={styles.imageSylabus} source={img5} />
          <Text>Sylabus</Text>
        </View>
        <View>
          <Image style={styles.imageCalifica} source={img1} />
          <Text>Calificaciones</Text>
        </View>
      </View>
      <View>
        <View>
          <Image style={styles.imageDocente} source={img3} />
          <Text>Profesor</Text>
        </View>
        <View>
          <Image style={styles.imageNotas} source={img2} />
          <Text>Notas</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}