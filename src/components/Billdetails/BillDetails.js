import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./BillDetailsCss"
import { useSelector } from "react-redux";
export default function BillDetails() {
  //  const [refresh,setRefresh]=useState(false)
    var cart=useSelector((state)=>state.cart) 
    var product=Object.values(cart)
    var netAmount=product.reduce((p1,p2)=>{
      return p1+p2.offerprice>0?p2.offerprice*p2.qty:price*p2.qty

    },0)

    var actualTotal=product.reduce((p1,p2)=>{
        return p1+p2.price*p2.qty
  
      },0)
      var offerTotal=product.reduce((p1,p2)=>{
        return p1+p2.offerprice*p2.qty
  
      },0)
      

  
    


    return (
        <SafeAreaView style={styles.Container}>

            <Text style={styles.heading}>Bill Details</Text>

            <View style={styles.Content}>
                <View style={styles.icontxt}>
                    <Icon name={"list-alt"} size={12} style={styles.iconstyling} color={'grey'} />
                    <Text style={styles.txt}>Sum Total</Text>
                </View>
                <View  >
                    <Text style={styles.price}>&#8377;{actualTotal}</Text>
                    <View>
                        <Text style={styles.txt} >&#8377;{offerTotal}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={styles.icontxt}>
                    <MCI name={"moped"} size={20} style={styles.iconstyling} color={'grey'}/>
                    <Text style={styles.txt}>Delivery Charge</Text>
                </View>
                <View>
                    <Text style={styles.txt}>&#8377;15</Text>
                </View>
            </View>

            <View style={styles.Content}>
                <View >
                    <Text style={styles.grandTotal}>Grand Total</Text>
                </View>
                <View  >
                    <Text style={styles.gtprice}>&#8377;{netAmount+15}</Text>
                    <View>
                        <Text style={styles.gttxt} >Save &#8377;{actualTotal-netAmount}</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

