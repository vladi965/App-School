import { View, Text } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component';

const Countdown = () => {
  return (
    <CountDown style={{ marginLeft: 120}}
      until={90 * 50 + 30}
      size={30}
      onFinish={() => alert('Finalizo')}
      onPress={() => alert('Bien')}
      digitStyle={{ borderColor: '#7460f2', borderWidth: 1 }}
      digitTxtStyle={{ color: '#7460F2' }}
      timeToShow={['M', 'S']}
      timeLabels={{m: null, s: null}}
      showSeparator
    />
  )
}

export default Countdown