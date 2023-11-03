import {useEffect,useState} from 'react'
import { View,TextInput,Text} from 'react-native'
import Colors from '../../assets/Colors'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
//import Icons from "react-native-vector-icons/Entypo"

const TextBox=({icon,placeHolder,error,password=false,onFocus=()=>{}})=>{
  const [isFocus,setIsFocus]=useState(false)
  const [viewPassword,setViewPassword]=useState(false)
  const handleViewPassword=()=>{
    setViewPassword(!viewPassword)
  }
  return(
  <View>
  <View onBlur={()=>setIsFocus(false)} onFocus={()=>{onFocus();setIsFocus(true)}} style={{padding:8,flexDirection:'row',alignItems:'center',borderColor:isFocus?Colors.darkGreen:error?Colors.red:Colors.darkGrey,borderWidth:0.6}}>
   <Icons name={password?'key-variant':icon} style={{fontSize:24,marginRight:6}}></Icons>
   <TextInput  placeholderTextColor="grey" secureTextEntry={viewPassword?false:true} placeholder={placeHolder} style={{fontSize:15}}/>
    {password?<Icons name={viewPassword?'eye':'eye-off'} style={{fontSize:26,marginLeft:130}}  onPress={handleViewPassword}/>:<></>}
  </View>
  {!error?<></>:
  <Text style={{color:Colors.red,margin:3,fontWeight:400,fontSize:12}}>
  {error}
  </Text>}
  </View>
  

  )
}
export default TextBox