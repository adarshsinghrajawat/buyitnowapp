import {Text,View,Dimensions} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import ImageComponent from "../components/selectedproduct/ImageComponent"
import UnitComponent from "../components/selectedproduct/UnitComponent"
//import PlusMinusButton from "../PlusMinusButton"
//import Colors from "../../../assets/Colors"
import Time from "../components/selectedproduct/Time"
import { postData } from "../services/ServerServices"
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import PlusMinusButton from "../components/PlusMinusButton"
import FloatingCart from "../components/FloatingCart"
const {width,height}=Dimensions.get('window')

export default function SelectedProduct(props){
   
    var dispatch=useDispatch()
    //const images=[{}]
    var cart=useSelector((state)=>state.cart)
    var keys= Object.keys(cart)
    const time={time:'10 min'}
   const [product,setProduct]= useState(props.route.params.product)
   const [refresh,setRefresh]=useState(false)
   var images=product.images.split(",")


   const handleQtyChange=(value,product)=>{
    if(value==0)
    {
        dispatch({type:'DELETE_CART',payload:[product.productlistid,product]})
          
    }
    else
     {
    product['qty']=value
   // setSelectedProduct(product) 
   dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
    }
    setRefresh(!refresh)
}
  // console.log("xxxxxxx",product)
    return(
        <View style={{marginLeft:10}}>

         <ImageComponent images={images} />
        
          <Text style={{fontSize:18,fontWeight:500,color:'black',padding:10}}>{product.productname} {product.weight} {product.pricetype}</Text>
          <View style={{flexDirection:'row'}}>
          <Time  data={time} />
          <View style={{marginVertical:0,display:'flex',alignItems:'center',justifyContent:'center',marginLeft:50}}>
           <PlusMinusButton data={product} onChange={(value)=>handleQtyChange(value,product)} width={220} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white}  />
           </View>
           </View>
         <UnitComponent setProduct={setProduct} product={product} />   
      
        
             
       
        {keys?.length>0?<FloatingCart />:<></>}
        </View>
    )
}