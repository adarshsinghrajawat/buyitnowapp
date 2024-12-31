import {StyleSheet, View, Modal, Text, TextInput} from 'react-native';
import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../Button';
import Colors from '../../../assets/Colors';
import OTPDialog from '../OTPDialog/OTPDialog';

const NumberDialog = (props) => {
   const [otpDialog,setOtpDialog]=useState(false)
   const [mobileno,setMobileno]=useState('')
   const [otp,setOtp]=useState('')
   const generateOTP=()=>{
  var otp=(parseInt(Math.random()*8999)+1000)
console.log("OTP",otp)
  setOtp(otp)
setOtpDialog(true)
props.setStatus(false)


   } 
  
    return (
    <View style={styles.container}>
      <Modal    visible={props.status} animationType="slide" transparent={true} >
        <View style={styles.container}>
          <View style={styles.textview}>
            <Text style={styles.txtstyle}>buyitNOW</Text>
            <View style={styles.description}>
              <Text style={styles.txtdescription}>
                Please Submit Your Mobile Number.
              </Text>
              <View style={styles.txtbox}>
                <TextInput onChangeText={(txt)=>setMobileno(txt)} style={styles.mobtxt}> </TextInput>
              </View>
              <View style={styles.rowstyle}>
                <View style={styles.submitbtn}>
                  <Button
                    bgColor={Colors.darkGreen}
                    foreColor={Colors.white}
                    title={'Submit'}
                    width={140}
                    height={40}
                     onPress={generateOTP}
                  />
                </View>
                <View style={styles.cancelbtn}>
                  <Button
                    bgColor={Colors.darkGreen}
                    foreColor={Colors.white}
                    title={'Cancel'}
                    width={140}
                    height={40}
                    onPress={()=>props.setStatus(false)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <OTPDialog otp={otp} mobileno={mobileno} otpDialog={otpDialog} setOtpDialog={setOtpDialog}/>
    </View>
  );
};

export default NumberDialog;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  textview: {
    width: 320,
    height: 250,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    padding: '3.5%',
    borderColor: Colors.black,
    borderRadius: 12,
    borderWidth: 0.4,
  },
  txtstyle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#00',
    letterSpacing: 1.2,
    color:'black'
  },
  description: {
    marginTop: '5%',
    color:'grey'
  },
  txtdescription: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color:'grey'
  },
  txtbox: {
    borderWidth: 0.4,
    borderColor: '#000',
    width: 280,
    height: 50,
    justifyContent: 'center',
    padding: 3,
    marginTop: '4%',
    color:'grey'
    // alignItems:'center'
  },
  mobtxt: {
    justifyContent: 'flex-start',
    fontSize: 18,
    color:'grey'
  },
  submitbtn: {
    alignItems: 'flex-start',
    marginTop: '4%',
  },
  rowstyle: {
    flexDirection: 'row',
  },
  cancelbtn: {
    alignItems: 'flex-end',
    marginTop: '4%',
    marginHorizontal: '2%',
  },
});
