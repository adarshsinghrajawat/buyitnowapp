import React from "react";
import { ServerURL } from "../services/ServerServices";
import { View,Text,ScrollView,Image } from "react-native";
import Colors from "../../assets/Colors";

export default function ExploreNewCategory(){

 var images=['kitchen.webp','makeupbeauty.webp','fitness.webp','safefood.webp','petcare.webp','party.webp','meat.webp']


   const playImages=()=>
    {
      return images.map((item)=>{
          return(<View>
            <Image source={{uri:`${ServerURL}/images/${item}`}} style={{width:100,height:150,marginLeft:5,resizeMode:'cover',marginBottom:5}} /> 
            
            </View>)
      })
    }



    return(
        <View style={{marginVertical:10}}>
                 <Text style={{marginLeft:5,fontSize:19,fontWeight:'bold',fontFamily:'Poppins',marginBottom:5,color:Colors.black}}>ExploreNewCategory</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                 {playImages()}
                   </ScrollView>
       
        
        </View>
    )
}