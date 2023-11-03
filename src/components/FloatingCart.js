import { View,Dimensions, Text,  TouchableOpacity } from "react-native";
import Colors from "../../assets/Colors";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get('window');



export default function FloatingCart(){
    var navigation=useNavigation()
    var cart=useSelector((state)=>state.cart)
    var keys=Object.keys(cart)
    var cart=Object.values(cart)
    var totalamount=cart.reduce((p1,p2)=>{
     var amt=p2.offerprice>0?p2.offerprice:p2.price
     return p1+amt
    },0)
    return(<View style={{position:'absolute',top:height*0.82,zIndex:1 }}>   
          <View style={{margin:1,backgroundColor:Colors.darkGreen,width:width*0.95,height:height*0.08,borderRadius:10,borderWidth:0.4}}>
             <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                
               <View style={{flexDirection:'row'}}>
                <View style={{padding:8}}>
                <Icons name={'cart-variant'} style={{fontSize:50,color:Colors.white}}/>
                </View>
                <View style={{paddingTop:8,flexDirection:'column'}}>
                    <Text style={{color:Colors.white,fontSize:18}}>{keys.length} item</Text>
                    <Text style={{color:Colors.white,fontSize:18}} >&#8377;{totalamount}</Text>
                </View>
                </View>
 
                   <TouchableOpacity onPress={()=>navigation.navigate('DeliveryCart')} style={{alignItems:'center',paddingRight:10,flexDirection:'row'}}>
                    <Text style={{color:Colors.white,fontSize:20,}}>View Cart </Text>
                    <Icons name={'arrow-right-thick'} style={{fontSize:18,color:Colors.white,marginTop:5}}/>
                   </TouchableOpacity>
            
             </View>
          </View>
    </View>)
}