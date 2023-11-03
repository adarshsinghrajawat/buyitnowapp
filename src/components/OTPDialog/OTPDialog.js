import {StyleSheet, Text, View, Modal, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from '../../../assets/Colors';
import Button from '../Button';
import { postData } from '../../services/ServerServices';
import AddressDialog from '../AddressDialog/AddressDialog';
import { storeData } from '../../storage/AsyncStorage';

const OTPDialog = (props) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  
  const [addressDialog,setAddressDialog]=useState(false) 
  const [userMobileData,setUserMobileData]=useState([])
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState(''); 
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const checkUserMobile=async()=>{
    var userOtp=pin1+pin2+pin3+pin4
    console.log(userOtp+","+props.otp)
    if(userOtp==props.otp)
    { console.log("Correct Otp")
     var result=await postData('userinterface/add_new_user',{mobileno:props.mobileno})
     if(result.status==1)
     {
      var resultAddress=await postData('userinterface/check_user_address',{mobileno:props.mobileno})
      if(resultAddress.status)
      {
        alert("Make Payment")
      }
      else
      { props.setOtpDialog(false)
        setUserMobileData(result.data)
        setAddressDialog(true)
      }


       

     }
     else
     {
      props.setOtpDialog(false)
      setUserMobileData(result.data)
      setAddressDialog(true)
   
    
     }
    }
    else{
    alert("Invalid Otp")
    }

  }
  return (
    <View style={styles.container}>
      <Modal visible={props.otpDialog} animationType="slide" transparent={true} >
        <View style={styles.container}>
          <View style={styles.textview}>
            <Text style={styles.txtstyle}>Gwalior Basket</Text>
            <View style={styles.description}>
              <Text style={styles.txtdescription}>
                Please Enter Correct Valid OTP.
              </Text>
            </View>
            <View style={styles.txtinputrowstyle}>
              <View style={styles.txtInputstyle}>
                <TextInput
                  ref={pin1Ref}
                  keyboardType={'number-pad'}
                  maxLength={1}
                  onChangeText={(txt)=>setPin1(txt)}
                  onChange={pin1 => {
                     
                    if (pin1 != '') {
                      pin2Ref.current.focus();
                    }
                  }}
                  style={styles.txtinput}
                />
              </View>
              <View style={styles.txtInputstyle}>
                <TextInput
                  ref={pin2Ref}
                  keyboardType={'number-pad'}
                  maxLength={1}
                  onChangeText={(txt)=>setPin2(txt)}
                  onChange={pin2 => {
                    
                    if (pin2 != '') {
                      pin3Ref.current.focus();
                    }
                  }}
                  style={styles.txtinput}
                />
              </View>
              <View style={styles.txtInputstyle}>
                <TextInput
                  ref={pin3Ref}
                  keyboardType={'number-pad'}
                  maxLength={1}
                  onChangeText={(txt)=>setPin3(txt)}
                  onChange={pin3 => {
                    
                    if (pin3 != '') {
                      pin4Ref.current.focus();
                    }
                  }}
                  style={styles.txtinput}
                />
              </View>
              <View style={styles.txtInputstyle}>
                <TextInput
                  ref={pin4Ref}
                  keyboardType={'number-pad'}
                  maxLength={1}
                  onChangeText={(txt)=>setPin4(txt)}
                  onChange={pin4 => {
                  
                    if (pin4 != '') {
                      // alert('Successfully Signed In !!!');
                        console.log("OTP Is Working!!!")
                    }
                  }}
                  style={styles.txtinput}
                />
              </View>
            </View>
            <Button onPress={checkUserMobile} bgColor={Colors.darkGreen} foreColor={Colors.white} width={275} height={40} title={"Verify OTP"}/>
          </View>
        </View>
      </Modal>
      <AddressDialog  userMobileData={userMobileData} addressDialog={addressDialog} setAddressDialog={setAddressDialog} mobileno={props.mobileno} />
    </View>
  );
};

export default OTPDialog;

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
    elevation:9
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
  txtInputstyle: {
    width: 40,
    borderColor: '#8e8e8e',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: '2.5%',
    marginVertical: '8%',
    marginHorizontal: '5%',
    borderRadius: 6,
    color:'grey'
  },
  txtinput: {
    fontSize: 25,
    color:'grey'
  },
  txtinputrowstyle: {
    flexDirection: 'row',
    color:'grey'
  },
});
