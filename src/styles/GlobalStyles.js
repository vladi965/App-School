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
  contentTop:{
    marginTop: -40
  },
  emoji:{
    height: 40,
    width: 40,
    fontSize: 25,
    marginLeft: 10
  },
  contentTitle:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
    marginLeft: -70
  },
  contentSearch: {
    marginTop: 5,
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
    marginBottom: 15,
  },
  ViewContent: {
    height: '100%',
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
  },
  //Curso Aritmetica
  // Teoria
  viewSecund:{
    marginHorizontal: 12
  },
  titleText:{
    textAlign: 'justify',
    lineHeight: 20

  },
  contentImage:{
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  img1:{
    width: 320,
    height: 257,
  },
  
  textTwo:{
    marginTop: 20,
  },
  pt1:{
    fontSize: 18,
    fontWeight: "bold",
    color: '#7460F2'
  },
  pt2:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  //Estadistica
  contentBoxTwo:{
    width: 165,
    height: 160,
    margin: 10,
    backgroundColor: '#fff',
    elevation: 7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBoxDirection:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25
  },
  textp1:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentPrimaryCircle:{
    display: 'flex',
    flexDirection: 'row',
  },
  circleContent:{
    display: 'flex',
    flexDirection: 'row',
  },
  one:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  r1:{
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 2
  },
  imgcircle:{
    marginRight: 3
  },
  opContent:{
    marginBottom: 80
  },
  h5:{
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenStadistc:{
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AFE5DC',
    borderRadius: 50,
  },
  imagenStadistc2:{
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAE7A8',
    borderRadius: 50,
  },
  imagen:{
    height: 40,
    width: 40
  },
  img3:{
    height: 180,
    width: 210
  },
  one1:{
    fontSize: 25,
    color: '#5184DD',
    fontWeight: 'bold',
  },
  one2:{
    fontSize: 25,
    color: '#F43838',
    fontWeight: 'bold',
  }
 
});
