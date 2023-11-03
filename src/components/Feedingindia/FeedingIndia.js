import React from "react";
import { View, Text, StyleSheet } from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./FeedingIndiaCss";

export default function FeedingIndia() {
    return (
        <View style={styles.Container}>
            <View>
                <Icons name={"food"} size={24} color={'grey'} />
            </View>
            <View style={styles.text}>
               <Text style={styles.heading}>Feeding India Donation</Text>
               <Text style={{color:'grey'}}>{"Working towards a malnutrition free India.Feeding India is a initiate to give donation to the NGO's basically help in Working for malnution free india".substring(0,55) +" ..."} </Text>
            </View>
        </View>
    )
}

