import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native"
import React, { useState } from "react"
import { ServerURL } from "../../services/ServerServices"
import PlusMinusButton from "../PlusMinusButton"
import Colors from "../../../assets/Colors"
import styles from "./ShowCartCss"
import { useSelector,useDispatch } from "react-redux"

 
export default function ShowCart(props) {
    const [refresh,setRefresh]=useState(false)
    var cart=useSelector((state)=>state.cart) 
    var product=Object.values(cart)
    
    var dispatch=useDispatch()
    
  const handleQtyChange=(value,product)=>{
    if(value==0)
    {
      dispatch({type:'DELETE_CART',payload:[product.productlistid,product]})  
    }
    else
    {
    product['qty']=value

    dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
    }
    props.setRefresh(!props.refresh)
   setRefresh(!refresh)
   
    
  }
    
    
    return product.map((item) => {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.imagestyling} >
                    <Image source={{ uri: `${ServerURL}/images/${item.productimage}` }} style={styles.productimage} />
                </View>
                <View style={styles.pricing}>
                    <Text style={styles.productname}>{item.productname.substring(0, 20) + "..."}</Text>
                    <Text style={{color:'grey'}}>{item.weight}</Text>
                    <View style={styles.prices}>
                        <Text style={styles.pricestyling} >&#8377;{item.price}</Text>
                        <Text style={styles.offertext}>&#8377;{item.offerprice}</Text>
                    </View>
                </View>
                <View  >
                <PlusMinusButton data={item}  onChange={(value)=>handleQtyChange(value,item)}    width={120} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white} />

                
                </View>
            </SafeAreaView>)
    })
}

