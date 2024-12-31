import { Text, View, Dimensions, ScrollView, TouchableOpacity } from "react-native"
import Colors from "../../../assets/Colors"
import { useState, useEffect } from "react"
import { postData } from "../../services/ServerServices"

const { width, height } = Dimensions.get('window')

export default function UnitComponent({ product, setProduct }) {

    const [unitsProduct, setUnitsProduct] = useState([])
    const [selectedproduct, setSelectedProduct] = useState(product)
    const fetchAllProduct = async () => {
        var result = await postData('userinterface/fetch_all_productlist_by_product', { productid: product.productid })
        setUnitsProduct(result.data)
        //  console.log("PRODUCT LIST",result.data)
    }

    useEffect(function () {
        fetchAllProduct()
    }, [])

    const handleSelectedProduct = (item) => {
        setSelectedProduct(item)
        setProduct(item)
    }

    const unitProduct = () => {
        return unitsProduct.map((item) => {
            return (
                <View>
                    <TouchableOpacity onPress={() => handleSelectedProduct(item)}>
                        <View style={{ borderWidth: item.productlistid == selectedproduct.productlistid ? 3 : 1, borderColor: Colors.darkGreen, width: width * 0.29, height: height * 0.1, margin: 10, borderRadius: 10, color: 'black', justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                            <View>
                                <View style={{ padding: 0, marginTop: -25, backgroundColor: Colors.darkGreen, borderRadius: 10 }}>
                                    <Text style={{ fontSize: 14, color: 'white', marginVertical: 5, marginHorizontal: 10, fontWeight: 600 }}>
                                        {parseInt((item.price - item.offerprice) / item.price * 100)}% OFF
                                    </Text>
                                </View>
                            </View>
                            <View style={{ padding: 5 }}>
                                <Text style={{ fontWeight: 500, color: 'black' }}>
                                    {item.weight} {item.pricetype}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, color: 'black', paddingHorizontal: 7 }}>
                                    &#8377;{item.offerprice}
                                </Text>
                                <Text style={{ paddingVertical: 2.5, textDecorationLine: 'line-through', color: 'black' }}>
                                    &#8377;{item.price}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    return (
        <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
            <Text style={{ fontWeight: 600, color: 'grey' }}>Select Unit</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {unitProduct()}
            </ScrollView>
        </View>
    )
}
