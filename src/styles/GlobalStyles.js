import { StyleSheet } from "react-native";
import { myColors } from "./Color";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  //Iniciar Sesion
  content:{
    marginTop: 85,
    alignItems: "center",
    justifyContent: "center",
  },  
  logo:{
    width: 130,
    height: 130,
    resizeMode: 'contain'
  },
  title: {
    marginTop: 13,
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
  },
  contentInput:{
    marginTop: 15
  },
  textInput:{
    marginTop: 25,
    fontSize: 18,
    height: 56,
    width:  320,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: myColors.gray,
    borderColor: '#7460F2'
  },
  btnContent:{
    height: 58,
    width: 320,
    marginTop: 30,
    backgroundColor: '#7460F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle:{
    color: 'white',
    fontSize: 17,
  },
  btnContentTwo:{
    height: 58,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#7460F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextOne:{
    color: '#000',
    fontSize: 15,
  },
  contentPrincipal:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //Google y Facebook
  contentButton:{
    flexDirection: 'row',
  },
  imgGoogle:{
    marginRight: 15,
  },
  contentRegistrar:{
    flexDirection: 'row',
    marginTop: 29,
  },
  TextRegistrarOne:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  TextRegistrarTwo:{
    fontSize: 17,
    marginLeft: 45,
    fontWeight: 'bold',
    color: myColors.btnviolet
  },
  //Registrar
  textRegister:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70
  },
  //Seleccione tu Grado
  btnSelection:{
    height: 58,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#7460F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextSelection:{
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 190
  },
  boxSelection:{
    marginTop: 40
  },
  TextContent:{
    fontSize: 25
  },
  contentView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Home Screen
  contentHome:{
    marginTop: 25,
    marginHorizontal: 20
  },
  textHome:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentSearch:{
    marginTop: 40,
  },
  search:{
    height: 56,
    width: 315,
    padding: 15,
    color: '#7460F2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7460F2',
    fontSize: 16
  },
  searchBar:{
    marginTop: 25,
    height: 56,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7460F2',
    color: '#7460F2',
  },
  contentSearch:{
    marginHorizontal: 20,
    marginTop: 50,
  },
  topexercises:{
    marginTop: 15,
  },

  //Cursos
  contentCurso:{
    backgroundColor: "#ffffff"
  }



  });
