import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Icon from "react-native-vector-icons/FontAwesome5";

const AlertMessage = () => {
  const [visible, setVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
      setVisible(!visible);
  }, [visible]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentView} onPress={toggleAlert}>
        <Text style={styles.text}>Aceptar</Text>
      </TouchableOpacity>

      <FancyAlert 
        visible={visible}
        icon={<View style={{ 
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 50,
          width: '100%',
        }}>
          <Icon name="times" color="white" size={30} />
          </View>}
          style={{ backgroundColor: 'white'}}
      >
        <Text style={{ marginTop: -16, marginBottom: 15, fontSize: 20 }}>Respuesta Incorrecta</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Ok</Text>
        </TouchableOpacity>
      </FancyAlert>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView:{
    width: 320,
    height: 60,
    backgroundColor: "#9468fc",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn:{
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: 'red',
    marginTop: 16,
    minWidth: '40%',
    paddingHorizontal: 16,
    marginBottom: 10
  },
  btnText:{
    color: 'white',
    fontSize: 18
  }

})

export default AlertMessage