import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex:1,
        width: "95%",
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#fff',
        border: 1,
        backgroundColor: '#fff',
        marginVertical:5,
        borderRadius:15
    },
    Content: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        marginVertical:8
    },
    price: {
        textDecorationLine: 'line-through',
        fontSize:12,
        color:'grey'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        
    },
    icontxt:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
       
    },
    iconstyling:{
        marginHorizontal:5
    },
    txt:{
        fontSize:12,
        color:'grey'
    },
    grandTotal:{
        fontWeight:"bold",
        color:"#000",
        marginHorizontal:5
    },
    gtprice:{
        fontWeight:"bold",
        color:"#000",
        marginLeft:'auto'
    },
    gttxt:{
        fontWeight:"bold",
        color:"#000"
    },
})

export default styles