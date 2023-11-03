import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex:1,
        width: "95%",
        height: "100%",
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        alignSelf:'center',
        borderColor:'#fff',
        border:1,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        backgroundColor:"#fff",
        
    },
    title:{
        fontSize:20,
        fontFamily:'Poppins',
        fontWeight:'bold',
        color:'#000',
    },
})

export default styles