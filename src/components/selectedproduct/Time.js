import React from 'react';
import { View, Text,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../../assets/Colors';

const {width,height} = Dimensions.get('window')

export default function Time({ data }) {

    return (<View style={{ marginHorizontal: 10, marginVertical:5 }} >
        <View style={{flexDirection:'row', backgroundColor:Colors.silver,width:width*0.2, justifyContent:'center', alignItems:'center',height:height*0.04,borderRadius:10}} >
            <View  > 
                <Icon name={'stopwatch'} style={{fontSize:20,color:'grey'}} />
            </View>
            <View>
                <Text style={{color:'grey'}} >{data.time}</Text>
            </View>
        </View>

    </View>)
}