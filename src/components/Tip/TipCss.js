import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
        height: "100%",
        width: "95%",
        // justifyContent:'center',
        // alignItems:'center',
        alignSelf: 'center',
        padding: 10,
        color:'grey'
    },
    content: {
        width: '80%',
        color:'grey'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: '#000',
        
    },
    buttonOne: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: "#000",
        borderWidth: 0.2,
        borderRadius: 5,
        flexDirection: 'row',
        color:'grey'
    },
    buttonstyling: {
        flexDirection: "row",
        color:'grey'
    },
})

export default styles