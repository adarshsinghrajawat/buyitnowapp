import React from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native"
import { useState } from "react"
import Button from "../Button";
import { ServerURL } from "../../services/ServerServices";
import Colors from "../../../assets/Colors";
import styles from "./TipCss";
import NumberDialog from "../Numberdialog/NumberDialog";
import { getKey } from "../../storage/AsyncStorage"
import RazorpayCheckout from 'react-native-razorpay';
export default function Tip(props) {
  const [status, setStatus] = useState(false)

  var options = {
    description: 'Credits towards car rent',
    image: `${ServerURL}/images/logo.png`,
    currency: 'INR',
    key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
    amount: 1000,
    name: 'Ram Kumar',
    prefill: {
      email: 'ss@gmail.com',
      contact: 9301123085,
      name: 'Gwalior Basket'
    },
    theme: { color: '#F37254' }
  }

  const handlePayment = () => {
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }







  const handleClick = async () => {
    var key = null

    key = await getKey()
    if (key == null) {
      //alert(key)
      setStatus(true)
    }
    else {
      alert("hii")
      handlePayment()
    }
  }

  return (<View >
    <View style={styles.Container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Tip your delivery partner.</Text>
        <Text style={{ color: 'grey' }}>Your Kindness means alot 100% of your tip will got directly to your delivery partner.</Text>
      </View>
      <View style={styles.buttonstyling}>
        <View style={styles.buttonOne}>
          <Text style={{ color: 'grey' }}>&#128512; &#8377;10</Text>
        </View>
        <View style={styles.buttonOne}>
          <Text style={{ color: 'grey' }} >&#128519; &#8377;50</Text>
        </View>
        <View style={styles.buttonOne}>
          <Text style={{ color: 'grey' }}>&#128525; &#8377;100</Text>
        </View>
        <View style={styles.buttonOne}>
          <Text style={{ color: 'grey' }}>&#128293; Custom</Text>
        </View>
      </View>
      <ScrollView>
        <Button onPress={() => handleClick()} bgColor={Colors.darkGreen} foreColor={Colors.white} width={"100%"} title={"Make Your Payment"} height={40} />
      </ScrollView>
      <NumberDialog status={status} setStatus={setStatus} />
    </View>

  </View>)
}

