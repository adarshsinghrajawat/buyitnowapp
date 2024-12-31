import {ScrollView,View,Text, Dimensions,Image} from "react-native"
import { ServerURL } from "../services/ServerServices";
import { useState } from "react";
import Colors from "../../assets/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const {width,height}=Dimensions.get('window');
export default function CircleComponent({heading,categories})
{ 
    const colorList=['#dff9fb','#f6e58d','#7ed6df','#f3a683','#f8a5c2']
    const [refresh,setRefresh]=useState(false)
    var navigation=useNavigation()

  const handleClick=(item)=>{
        setRefresh(!refresh)
          navigation.navigate('Product',{categoryid:item.categoryid,categoryname:item.categoryname})
      }

    // const category=[{categoryid:1,image:"car2.png",name:'car'},{categoryid:2,image:"lucifer.jpg",name:'Lucifer'},{categoryid:3,image:"oil.png",name:"Oil"},{categoryid:3,image:"oil.png",name:"Oil"},{categoryid:3,image:"oil.png",name:"Oil"},{categoryid:3,image:"oil.png",name:"Oil"}]
    const showCategory=()=>{
        return categories.map((item)=>{
        return (<View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>handleClick(item)}>
        <View style={{margin:4,justifyContent:'center',alignItems:'center',backgroundColor:colorList[parseInt(Math.random()*colorList.length)],width:86,height:85,borderRadius:50}}>
          
            <Image
             style={{resizeMode:'contain',width:60,height:60}}
                source={{uri:`${ServerURL}/images/${item.icon}`}}
                />
               
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{color:'grey',width:90,textAlign:'center'}}>{item.categoryname}</Text>
        </TouchableOpacity>
        </View>)})

       
        
    }

return(
    <View>
        <Text style={{color:'black',marginLeft:10,marginVertical:10,fontWeight:'bold'}}>{heading}</Text>
        <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        {showCategory()}
        </ScrollView>
        </View>
        </View>
    )
}