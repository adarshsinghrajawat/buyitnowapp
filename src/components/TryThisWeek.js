
import React from "react";
import { ServerURL } from "../services/ServerServices";
import { View,Text,ScrollView,Image } from "react-native";
import Colors from "../../assets/Colors";

export default function TryThisWeek(){

var images=['tw1.webp','tw2.webp','tw3.webp','tw4.webp','tw5.webp']


   const playImages=()=>
    {
      return images.map((item)=>{
          return(<View>
            <Image source={{uri:`${ServerURL}/images/${item}`}} style={{width:120,height:200,marginLeft:6,resizeMode:'cover',marginRight:5,marginBottom:5}} /> 
            
            </View>)
      })
    }



    return(
        <View style={{marginVertical:10}}>
                 <Text style={{marginLeft:5,fontSize:19,fontWeight:'bold',fontFamily:'Poppins',marginBottom:5,color:Colors.black}}>Try This Week</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                 {playImages()}
                   </ScrollView>
       
        
        </View>
    )
}









