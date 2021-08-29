import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  
    state = {
      
      text1:'',
      text2:'',
      resultado:'0'};

   Sumar(valor1, valor2)
  {
    if(!!valor1 &&  !!valor2)
    {
    var a=parseFloat(valor1);
    var b=parseFloat(valor2);
    var c=a+b;
    this.setState({resultado: a+"+"+b+"="+c}) ;
    }
    else
    this.setState({resultado: 'Error!!'}) ;
  }



  render() {
    
    return (
      <View style={{flex:1,padding: 10,fontSize:24}}>
      <Text style={{padding: 15, fontSize: 24,backgroundColor:'orange',color: 'white',
      textAlign:'center'}}>
       Suma de dos numeros
      </Text>
      
      <TextInput
        style={{height: 40,borderColor:'green',borderWidth:2,padding:5,marginTop:10}}
        placeholder="Valor 1"
        onChangeText={(text1) => this.setState({text1})}
        keyboardType='numeric'
      />
      <TextInput
        style={{height: 40,borderColor:'green',borderWidth:2,padding:5,marginTop:5}}
        placeholder="Valor 2"
        onChangeText={(text2) => this.setState({text2})}
         keyboardType='numeric'
      />
    
 <TouchableOpacity 
 style={{height: 60,backgroundColor:'blue', marginTop:10,alignContent:'center',alignItems:'center',textAlignVertical:'center'}}
    onPress={() => {
 this.Sumar(this.state.text1,this.state.text2);
}}
>
<Text style={{color:'white',fontSize:24,textAlignVertical:'center',textAlign: "center"}}>Sumar</Text>
</TouchableOpacity>

      <Text style={{padding: 10, fontSize: 32}}>
        {this.state.resultado}
      </Text>
      
    </View>
    );
  }
}