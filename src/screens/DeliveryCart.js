import React from 'react';
import { View, Text, Card, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import Delivery from '../components/Delivery/Delivery'
import ShowCart from '../components/Showcart/ShowCart';
import BillDetails from '../components/Billdetails/BillDetails';
import FeedingIndia from '../components/Feedingindia/FeedingIndia';
import DeliveryInstructions from '../components/Deliveryinstructions/DeliveryInstructions';
import Tip from '../components/Tip/Tip';
import {useState} from 'react'


export default function DeliveryCart(props) {
    const [refresh,setRefresh]=useState(false)
    return (<View style={{ flex: 1, marginVertical: 5 }}>
        <ScrollView>
            <Delivery />
            <ShowCart  setRefresh={setRefresh} refresh={refresh} />
            <BillDetails />
            <FeedingIndia />
            <DeliveryInstructions />
            <Tip />
        </ScrollView>
    </View>)
}