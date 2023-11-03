import {useEffect,useState} from 'react'
import { View,Text,TouchableOpacity} from 'react-native'

const Button=({title,width,bgColor,foreColor,onPress=()=>{}})=>{
  return(
    <TouchableOpacity onPress={onPress }>
  <View style={{backgroundColor:bgColor,width:width,justifyContent:'center',borderRadius:10,padding:10,alignItems:'center',borderRadius:7}}>
  <Text style={{color:foreColor,fontWeight:'bold',fontSize:14}}>
    {title}
  </Text>
  </View>
  </TouchableOpacity>)

}
export default Button