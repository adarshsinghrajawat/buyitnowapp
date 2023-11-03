import {ScrollView,View,Text, Dimensions,Image} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import PlusMinusButton from "./PlusMinusButton"
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";


const {width,height}=Dimensions.get('window');
export default function SingleProductComponent({data,setRefresh,refresh})
{ const navigation=useNavigation()
    var dispatch=useDispatch()
    //var [selectedproduct,setSelectedProduct]=useState()
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
    return(
             <View style={{margin:10}}>
            <View style={{borderColor:'#a4b0be',borderWidth:1,width:width*0.4,height:height*0.33,borderRadius:5,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>navigation.navigate("SelectedProduct",{product:data})}>
 
            <Image
             style={{resizeMode:'contain',width:110,height:100,marginVertical:8}}
                source={{uri:`${ServerURL}/images/${data.productimage}`}}
                />
                <Text style={{color:'grey',marginVertical:2,fontWeight:'bold',fontSize:13}}>{data.productname} {data.weight} {data.pricetype}</Text>
                <View style={{justifyContent:'flex-start',width:width*0.3}}>
                <Text style={{color:'grey',fontWeight:'bold' ,textDecorationLine:'line-through',color:Colors.red}}>&#8377; {data.price}</Text>
                <Text style={{color:'grey',fontWeight:'bold',color:Colors.black}}>&#8377; {data.offerprice}</Text>
                <Text style={{color:'grey',fontWeight:'bold',color:Colors.darkGreen}}>Save &#8377; {data.price-data.offerprice}</Text>
               
            </View>
            </TouchableOpacity>
            <View style={{marginVertical:10,width:"100%",height:45,marginLeft:100}}>
         <PlusMinusButton data={data} onChange={(value)=>handleQtyChange(value,data)} width={100} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white}/>
         </View>
            </View>
        </View>
       
      
    )
}