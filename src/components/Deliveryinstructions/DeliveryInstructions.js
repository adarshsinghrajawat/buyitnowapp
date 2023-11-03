import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./DeliveryInstructionCss";

export default function DeliveryInstructions() {

    const deliveryinstructions = [
        { id: 1, icon: "microphone", topic: 'Record', line: 'Press Here To Hold.' },
        { id: 1, icon: "phone-off", topic: ' ', line: 'Avoid Calling.' },
        { id: 1, icon: "bell-off", topic: ' ', line: "Don't Ring The Bell." },
        { id: 1, icon: "message-bulleted-off", topic: ' ', line: "Don't Message." },
        { id: 1, icon: "truck-delivery", topic: ' ', line: 'Deliver Item Safely.' },
    ]

    const DeliveryInstructionsScroll = () => {
        return deliveryinstructions.map((item) => {
            return (
                <View style={styles.container}>
                    <View style={styles.firstboxrow} >
                        <View style={styles.firstrow} >
                            <Icons name={item.icon} size={24}  color={'grey'}/>
                            <Text style={styles.boxtext}>{item.topic}</Text>
                        </View>
                        <Text style={styles.lastrow}>{item.line}</Text>
                    </View>
                </View>
            )
        })
    }
    return (<View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {DeliveryInstructionsScroll()}
        </ScrollView>
    </View>)

}

