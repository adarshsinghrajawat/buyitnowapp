import {ScrollView,Text,View,Image,Dimensions} from "react-native";
import { ServerURL } from "../../services/ServerServices";  
//import { ScrollView } from "react-native-gesture-handler";
const {width,height}=Dimensions.get('window');
export default function ImageComponent({images}){

    const smallImages=()=>{
        return images.map((item)=>{
            return(
                <View style={{padding:10}}>
                <Image
                 style={{resizeMode:'contain',width:60,height:60}}
                 source={{uri:`${ServerURL}/images/${item}`}}
                />
                </View>
            ) })
    }


    return(
        <View>
            <View style={{padding:20,width:width,alignContent:'center',justifyContent:'center'}}>
            <Image
            style={{resizeMode:'contain',width:300,height:300}}
            source={{uri:`${ServerURL}/images/${images[0]}`}}
            />
        </View>
        <View>
            <ScrollView horizontal={true}>
                {smallImages()}
            </ScrollView>
        </View>
        </View>
    )
}