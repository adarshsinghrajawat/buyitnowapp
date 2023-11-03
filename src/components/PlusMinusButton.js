//import React from "react";
import {View,Text,TouchableOpacity, Dimensions} from "react-native"
import Button from "./Button";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { useState } from "react";
import Colors from "../../assets/Colors";
import { color } from "react-native-reanimated";
import { UseSelector, useSelector } from "react-redux";
//import { color } from "react-native-reanimated";
const {width,height}=Dimensions.get('window')
export default function PlusMinusButton(props){
  //var cart=useSelector((state)=>state.cart)
  //var qty=cart[props.product.productlistitem]?.qty
 // console.log("QUANTITY",props.product)

 var cart=useSelector((state)=>state.cart)
 console.log("CARRT",cart)
 console.log('Data',props.data)
 var qty=cart[props.data.productlistid]?.qty
 var tqty=0
 if(qty!==undefined)
 tqty=qty
const [values,setValues]=useState(tqty);


const btnplus=()=>{
    if(values <5){setValues(prev=>prev+1)}
    props.onChange(values+1);
}

const btnminus=()=>{
    if(values >0){setValues(prev=>prev-1)}
    props.onChange(values-1);
}

return(
    <>
    {!values ? <Button onPress={()=>{btnplus() }} bgColor={Colors.darkGreen} width={props.width}  foreColor={Colors.white} title={"ADD"}  style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}} />:
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <TouchableOpacity onPress={()=>{btnminus() }} style={{width:props.width*0.25,backgroundColor:Colors.darkGreen,height:35,justifyContent:'center',alignSelf:'center',alignItems:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
    <Text style={{color:Colors.white}}>-</Text>
 </TouchableOpacity>
    <View style={{width:props.width*0.3,backgroundColor:Colors.white,height:34,justifyContent:'center',alignSelf:'center',alignItems:'center',borderColor:Colors.darkGreen,borderWidth:0.5}}>
      <Text style={{color:Colors.grey}}>{values}</Text>
    </View>
       <TouchableOpacity onPress={()=>{btnplus() }} style={{width:props.width*0.25,backgroundColor:Colors.darkGreen,height:35,justifyContent:'center',alignSelf:'center',alignItems:'center',borderTopRightRadius:5,borderBottomRightRadius:5}} >
       <Text style={{color:Colors.white}}>+</Text>
       </TouchableOpacity>
      </View>}
    </>

)
}