import { StyleSheet } from "react-native";
import { myColors } from "./Color";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  textH3: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center'
  },
  textH2: {
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    marginHorizontal: 15,
    marginBottom: 15,
    fontWeight: "bold",
  },
  //Iniciar Sesion
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  title: {
    marginTop: 13,
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
  },
  contentInput: {
    marginTop: 15,
  },
  textInput: {
    marginTop: 25,
    fontSize: 16,
    height: 56,
    width: 320,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: myColors.gray,
    borderColor: "#7460F2",
  },
  btnContent: {
    height: 58,
    width: 320,
    marginTop: 30,
    backgroundColor: "#7460F2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    color: "white",
    fontSize: 17,
  },
  btnContentTwo: {
    height: 58,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#7460F2",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextOne: {
    color: "#000",
    fontSize: 15,
  },
  contentPrincipal: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //Google y Facebook
  contentButton: {
    flexDirection: "row",
  },
  imgGoogle: {
    marginRight: 15,
  },
  contentRegistrar: {
    flexDirection: "row",
    marginTop: 29,
  },
  TextRegistrarOne: {
    fontSize: 17,
    fontWeight: "bold",
  },
  TextRegistrarTwo: {
    fontSize: 17,
    marginLeft: 45,
    fontWeight: "bold",
    color: myColors.btnviolet,
  },
  //Registrar
  textRegister: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 70,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
  },
  eyeContainer:{
    position: "absolute",
    right: 10,
    top: 40
  },
  //Seleccione tu Grado
  btnSelection: {
    height: 58,
    width: 150,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#7460F2",
    justifyContent: "center",
    alignItems: "center",
  },
  TextSelection: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 190,
  },
  boxSelection: {
    marginTop: 10,
  },
  TextContent: {
    fontSize: 25,
  },
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //Home Screen
  contentHome: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  textHome: {
    fontSize: 30,
    fontWeight: "bold",
  },
  contentSearch: {
    marginTop: 40,
  },
  search: {
    height: 56,
    width: 315,
    padding: 15,
    color: "#7460F2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7460F2",
    fontSize: 16,
  },
  searchBar: {
    marginTop: 25,
    height: 56,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#7460F2",
    color: "#7460F2",
  },
  contentSearch: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  topexercises: {
    marginTop: 15,
  },

  //Cursos
  contentCurso: {
    backgroundColor: "#ffffff",
  },

  //Lista de Contenido de Aritmetica
  temaStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  ViewContent: {
    backgroundColor: "#fff",
  },
  //Previo del Examen
  imgContent:{
    marginTop: 55,
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 25
  },
  ViewExamPrev:{
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 30
  },
  imgEx:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 7
  },
  extitle:{
    fontSize: 14,
    color: '#646464'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor: '#727272',
    margin: 15,
    marginHorizontal: 18,
    width: '90%',
  },
  ViewText:{
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 7 
  },
  TextH4:{
    fontSize: 16,
    color: '#000',
    marginLeft: 10
  },
  contentPrevi:{
    marginTop: 10,
    marginBottom: 15
  },
  CircleText:{
    color: '#000',
    fontWeight: "bold",
    fontSize: 16,
  }  
});
