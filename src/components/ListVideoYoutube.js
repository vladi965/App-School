import React, { useState, useCallback, useRef } from 'react'
import { View, Text, Alert, Button, ScrollView } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

export default function Youtube() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) =>{
        if(state === 'ended'){
            setPlaying(false);
            Alert.alert('Video ha terminado');
        }
    }, []);

    const togglePlaying = useCallback(() =>{
        setPlaying((prev) => !prev);
    }, []);

  return (
    <View style={{ marginTop: 20 }}>
         <ScrollView showsVerticalScrollIndicator={false}>

      <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: 'bold' }}>Teoría de Exponentes - Ejercicios Resueltos N° 1</Text>
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={"6m-Qzh3NDjk"}
      />
       <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: 'bold' }}>Leyes de los Exponentes - Todas las Leyes</Text>
       <YoutubePlayer
        height={250}
        play={playing}
        videoId={"CfbspxOf0lA"}
      />
       <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: 'bold' }}>Ejercicios resueltos aplicando Leyes de Exponente</Text>
       <YoutubePlayer
        height={250}
        play={playing}
        videoId={"hlQqVjCS2F0"}
      />
       <Text style={{ marginBottom: 15, fontSize: 15, fontWeight: 'bold' }}>Teoría de Exponentes - Simplificación</Text>
       <YoutubePlayer
        height={250}
        play={playing}
        videoId={"rpKDdzm2dos"}
      />
      </ScrollView>
    </View>
  );
}