import { View, Text, Dimensions, StyleSheet } from "react-native"
//import CircleComponent from "../components/CircleComponent"
//import TextBox from "../components/TextBox"
import SingleProductComponent from "../components/SingleProductComponent";
//import Colors from "../../assets/Colors";
import styles from "./MultipleProductsComponentCss"
import { FlatList } from "react-native-gesture-handler";
const { width, height } = Dimensions.get('window');

export default function MultipleProductsComponent({ products, title,setRefresh,refresh }) {

    const ShowItem = ({ product }) => {

        return <SingleProductComponent setRefresh={setRefresh} refresh={refresh} data={product} />
    }

    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                // numColumns={2}
                horizontal={true}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({ item }) => <ShowItem product={item} />}
                keyExtractor={item => item.id}
            />
        </View>

    )
}