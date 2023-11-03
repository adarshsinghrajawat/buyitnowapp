import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:120,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        color:'grey'
    },
    firstboxrow: {
        border: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.7,
        borderColor: '#8e8e8e',
        marginHorizontal: 5,
        color:'grey'
    },
    firstboxcolumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        color:'grey'
    },
    boxtext: {
        fontSize: 16,
        color:'grey'

    },
    firstrow:{
        flexDirection:'row',
        color:'grey'
    },
    lastrow:{
        marginVertical:8,
        color:'grey'
    }

})

export default styles