import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "95%",
        height: "80%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#fff',
        border: 1,
        //  marginVertical:5,
        // borderRadius:15,
        backgroundColor: "#fff",
        padding:5,
        color:'grey'
    },
    pricing: {
        width: "40%",
        justifyContent: 'center',
        alignItems: 'center',
        color:'grey'
    },
    productimage: {
        width: 80,
        height: 95,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        
    },
    productname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        
    },
    prices: {
        flexDirection: 'row',
        color:'grey'
    },
    pricestyling: {
        marginHorizontal: 3,
        textDecorationLine: 'line-through',
        color:'grey'
    },
    offertext: {
        fontWeight: 'bold',
        color: '#000'
        
    },
    imagestyling:{
        backgroundColor:'#fff',
        borderWidth:0.1,
        flex:1,
        borderColor:"#000",
        height:'95%',
        borderRadius:5,
        padding:5,
        
    },
})

export default styles