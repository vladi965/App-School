import React, {useState, Component} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
const ListExamen = require('../Data/Algebra/ListExamen.json')


export default class ExamenView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: ListExamen
    };
  }

  onchecked(id){
    const data = this.state.data
    const index = data.findIndex(x=>x.id === id);
    data[index].checked=!data[index].checked
    this.setState(data)
  }

  renderExamen(){
    return this.state.data.map((item, key) => {
      return(
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 18, marginHorizontal: 10 }} key={key} onPress={() => {this.onchecked(item.id)}}>
          <Checkbox value={item.checked} onValueChange={() => {this.onchecked(item.id)}}/>
          <Text style={{ marginLeft: 5, fontSize: 16 }}>{item.key}</Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return (
      <View>
          <View style={{ flexDirection: "row" }}>
              {this.renderExamen()}
          </View>
      </View>
    );

  }
};


