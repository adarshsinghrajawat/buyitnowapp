import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex:1,
        width: '95%',
        height: '12%',
        justifyContent:'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection:'row',
        color:'grey'
    },
    heading:{
        color:'#000',
        fontSize:20,
        fontFamily:'Poppins',
        fontWeight:'bold',
        
    },
    text:{
        padding:5,
        color:'grey'
    },
})

export default styles