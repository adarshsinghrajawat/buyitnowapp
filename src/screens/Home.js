import {View,Text, Dimensions} from "react-native"
import CircleComponent from "../components/CircleComponent"
import TextBox from "../components/TextBox"
import { UseSelector, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import MultipleProductsComponent from "../components/MultipleProductsComponent";
import SingleProductComponent from "../components/SingleProductComponent";
import FloatingCart from "../components/FloatingCart";
import { getData,postData } from "../services/ServerServices";
// import { useEffect, useState } from "react";
//import { fetchAllCategory } from "../services/CallAPIServices";
const {width,height}=Dimensions.get('window');

export default function Home()
{  const [categories,setCategories]=useState([])
    const [products,setProducts]=useState([])
    const [refresh,setRefresh]=useState(false)
    var cart=useSelector((state)=>state.cart)
    var keys= Object.keys(cart)
    const setInitialData=async()=>{
    var result=await getData('userinterface/fetch_all_category')
    setCategories(result.data)
    var res=await postData('userinterface/fetch_products_by_category',{categoryname:'Dawat Basmati'})
   
    setProducts(res.data)
   }


    
    useEffect(function(){
     setInitialData()

    },[])
    

    return(
        <View style={{position:'relative'}}>
            <View style={{marginVertical:10,marginLeft:10,marginRight:10}}>
                <TextBox width={width*0.94}  placeHolder={"Search Products Here.."} icon={"magnify"}  style={{color:'grey'}} backgroundcolor={'grey'}/>
            {/* <Text style={{color:"grey"}}>Home</Text> */}
            <CircleComponent  heading={"Popular Categories"} categories={categories} />
            <View>
                <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} title={'Dawat Rice'} products={products}/>
            </View>
           {keys?.length>0?<FloatingCart />:<></>}
        </View>
        </View>
    )
}