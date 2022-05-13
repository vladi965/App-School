import React, { useState, useCallback, useRef } from 'react'
import { View, Text, Alert, Button } from 'react-native'
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
    <View>
      <YoutubePlayer 
        height={400}
        play={playing}
        videoId={"UcLiO6yLJ3s"}
      />
    </View>
  );
}