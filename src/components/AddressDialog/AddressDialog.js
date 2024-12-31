import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import Button from '../Button';
import Colors from '../../../assets/Colors';
import { storeData } from '../../storage/AsyncStorage';
import { postData } from '../../services/ServerServices';
const AddressDialog = (props) => {


  const [mobileno, setMobileno] = useState('')

  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = async () => {
    var body = { userid: props?.userMobileData[0]?.userid, phone: props.userMobileData[0].mobileno, fullname: name, state: state, city: city, zipcode: zipCode, address: address }
    console.log("xxxxxxx", body)
    var result = await postData('userinterface/add_user_address', body)
    if (result.status) {
      await storeData(props?.userMobileData[0]?.mobileno, body)
      props.setAddressDialog(false)
    }
    else {
      alert('Fail to submit address')
    }
  }

  return (
    <View style={styles.container}>
      <Modal visible={props.addressDialog} animationType="slide" transparent={true}>
        <View style={styles.container}>
          <View style={styles.txtview}>
            <ScrollView>
              <Text style={styles.heading}>Enter Your Address</Text>
              <View style={styles.txtbox}>
                <TextInput
                  style={{ color: 'grey' }}
                  //style={styles.mobtxt}
                  value={props?.userMobileData[0]?.mobileno}
                  placeholder={'Mobile Number'}
                />
              </View>
              <View style={styles.txtbox}>
                <TextInput style={{ color: 'grey' }}
                  onChangeText={(txt) => setName(txt)}
                  placeholder={'Full Name...'} />
              </View>
              <View style={styles.txtbox}>
                <TextInput style={styles.mobtxt}

                  onChangeText={(txt) => setAddress(txt)}

                  placeholder={'Address'} />
              </View>
              <View style={styles.txtbox}>
                <TextInput style={styles.mobtxt}
                  onChangeText={(txt) => setCity(txt)}
                  placeholder={'City'} />
              </View>
              <View style={styles.txtbox}>
                <TextInput style={styles.mobtxt}
                  onChangeText={(txt) => setState(txt)}
                  placeholder={'State'} />
              </View>
              <View style={styles.txtbox}>
                <TextInput style={styles.mobtxt}
                  onChangeText={(txt) => setZipCode(txt)}
                  placeholder={'Pincode'} />
              </View>
              <View style={styles.btn}>
                <Button
                  bgColor={Colors.darkGreen}
                  foreColor={Colors.white}
                  width={240}
                  height={45}
                  title={'Submit Details'}
                  onPress={() => handleSubmit()}

                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddressDialog;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    color: 'grey'
  },
  txtview: {
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: '#000',
    padding: '2%',
    backgroundColor: '#fff',
    width: 280,
    borderRadius: 5,
    color: 'grey'

  },
  txtbox: {
    borderWidth: 0.9,
    borderColor: '#000',
    width: 240,
    height: 48,
    justifyContent: 'center',
    padding: 3,
    marginTop: '4%',
    color: 'grey'

    // alignItems:'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',

  },
  mobtxt: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'grey'

  },
  btn: {
    marginVertical: '4%',

  },
});
