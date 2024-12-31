import { View, Text, Dimensions } from "react-native"
import CircleComponent from "../components/CircleComponent"
import TextBox from "../components/TextBox"
import { UseSelector, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import MultipleProductsComponent from "../components/MultipleProductsComponent";
import SingleProductComponent from "../components/SingleProductComponent";
import Banner from "../components/Banner";
import Colors from "../../assets/Colors";
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from "react-native-gesture-handler";
import FloatingCart from "../components/FloatingCart";
import ExploreNewCategory from "../components/ExploreNewCategory";
import TryThisWeek from "../components/TryThisWeek";
import { getData, postData,ServerURL } from "../services/ServerServices";
import { Image } from "react-native";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";


// import { useEffect, useState } from "react";
//import { fetchAllCategory } from "../services/CallAPIServices";
const { width, height } = Dimensions.get('window');

export default function Home() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

//     const[categories,setCategories]=useState([])
//    const[products,setProducts]=useState([])
   const[products2,setProducts2]=useState([])
   const[products3,setProducts3]=useState([])
   const[products4,setProducts4]=useState([])
   const[products5,setProducts5]=useState([])
    const [refresh, setRefresh] = useState(false)

    var cart = useSelector((state) => state.cart)
    var keys = Object.keys(cart)

    
    useEffect(function(){
        setInitialData()
        console.disableYellowBox = true
       },[])


    const setInitialData = async () => {
        var result = await getData('userinterface/fetch_all_category')
        setCategories(result.data)
        var res = await postData('userinterface/fetch_products_by_category', { categoryname: 'Fruits' })

        setProducts(res.data)

        var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Drinks & juices'})
        setProducts2(result.data)
        var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Tea & Coffee'})
        setProducts3(result.data)
        var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Biscuites  &  cookies'})
        setProducts4(result.data)
        var result=await postData('userinterface/fetch_productlist_by_categoryname',{categoryname:'Daily Feast'})
        setProducts5(result.data)
    }



    // useEffect(function () {
    //     setInitialData()

    // }, [])
    const handleClick=()=>{
        navigation.navigate('Searching')
      }


    return (
        
        <View style={{ position: 'relative' }}>
              <ScrollView>
            <View style={{ marginVertical: 10, marginLeft: 10, marginRight: 10 }}>
                {/* <TextBox width={width * 0.94} onPressIn={(event)=>handleClick(event)} placeHolder={"Search Products Here.."} icon={"magnify"} style={{ color: 'grey' }} backgroundcolor={'grey'} /> */}
                {/* <Text style={{color:"grey"}}>Home</Text> */}
                <View>
               <Banner/>
               <CardGrid/>
            </View>
            
           
                <CircleComponent heading={<Text style={{marginLeft:5,fontSize:19,fontWeight:'bold',fontFamily:'Poppins',marginBottom:5,color:Colors.black}}>Popular Categories</Text>} categories={categories} />
                <View>
                    <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} title={'Fruits'} products={products} />
                </View>

                <View>
        <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} heading={"Drinks & Juices"} products={products2}/>
       </View>
       
       <View>
        <Image source={{uri:`${ServerURL}/images/${'summer.webp'}`}} style={{resizeMode:'stretch',height:130,width:360,alignSelf:'center',marginBottom:20}}/>
       </View>

       <View>
        <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} heading={"Tea & Coffee"} products={products3}/>
       </View>

       <View>
        <ExploreNewCategory/>
       </View>
     

       <View>
      <TryThisWeek/>
     
    
       </View>

       <View>
        <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} heading={"Daily Feast"} products={products5}/>
       </View>

       <View>
        <MultipleProductsComponent setRefresh={setRefresh} refresh={refresh} heading={"Biscuites & cookies"} products={products4}/>
       </View>

                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}>
       {/* <View>
       <Image
          style={{resizeMode:'stretch', width: 180, height:100}}
          source={require('../../assets/logo.png')}
        />
      
        </View> */}
        
        <View  style={{marginVertical:20}}>
       
        {/* <View>
            <Text style={{fontSize:16,fontWeight:600}}>Connect with us.... </Text>
        </View> */}
        
        {/* <View style={{flexDirection:'row',margin:10}}>
        <Icons name='whatsapp' size={20} color={'#218c74'} style={{marginRight:2}}  />
        <Icon name='facebook-square' size={20} color={'#6c5ce7'} style={{marginLeft:7}}/>
        <Icon name='instagram' size={20} color={'#d35400'} style={{marginLeft:8}}/>
        <Icon name='twitter' size={20} color={'#3498db'} style={{marginLeft:8}}/>
        </View> */}
        <View>
            
        </View>

        </View>

       </View>
       
                {keys?.length > 0 ? <FloatingCart /> : <></>}
                
            </View>
            </ScrollView>
            <View>
            <Footer/>
            </View>
        </View>
       
    )
}