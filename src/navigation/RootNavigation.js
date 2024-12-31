import React, { useEffect } from "react";
import Home from "../screens/Home";
import Products from "../screens/Products";
import MyProfile from "../screens/MyProfile";
import SelectedProduct from "../screens/SelectedProduct";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Image, Text, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import LinearGradient from "react-native-linear-gradient";

import DeliveryCart from "../screens/DeliveryCart";
import FloatingCart from "../components/FloatingCart";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function RootNavigation() {
  useEffect(() => {
    // Fetch user details or any other setup logic here
  }, []);

  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: styles.drawerStyle,
          drawerLabelStyle: styles.drawerItemLabel, // Apply white color to labels
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => <MCI name={"home-city"} size={30} color={"#fff"} />,
          }}
        />
        <Drawer.Screen
          name="Homework"
          component={Products}
          options={{
            drawerIcon: () => <MCI name={"car"} size={30} color={"#fff"} />,
          }}
        />
      </Drawer.Navigator>
    );
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        {/* Drawer Header */}
        <LinearGradient
          colors={["#ff9a9e", "#fad0c4"]} // Soft pink to light pink gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerContainer}
        >
          <Image
            style={styles.profileImage}
            source={require("../../assets/dontblink.png")}
          />
          <Text style={styles.profileName}>Adarsh Singh Rajawat</Text>
          <Text style={styles.profileContact}>+91 6662299770</Text>
          <Text style={styles.profileEmail}>ss@gmail.com</Text>
        </LinearGradient>

        {/* Drawer Items */}
        <DrawerItemList {...props} />
        <DrawerItem
          label="My Profile"
          onPress={() => props.navigation.navigate("MyProfile")}
          icon={() => <MCI name={"account-box"} size={30} color={"#fff"} />}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Settings"
          icon={() => <MCI name={"account-settings"} size={30} color={"#fff"} />}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Logout"
          icon={() => <MCI name={"logout"} size={30} color={"#fff"} />}
          labelStyle={styles.drawerItemLabel}
        />
      </DrawerContentScrollView>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home1"}>
        <Stack.Screen
          name="Home1"
          component={ProjectDrawer}
          options={{
            header: AppHeader,
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            header: AppHeader,
          }}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="SelectedProduct"
          component={SelectedProduct}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="DeliveryCart"
          component={DeliveryCart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FloatingCart"
          component={FloatingCart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#20232a", // Dark background for contrast
    width: "80%", // Making the drawer wider
  },
  headerContainer: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    elevation: 5, // Adds a shadow to make it pop out
  },
  profileImage: {
    borderRadius: 50,
    resizeMode: "contain",
    width: 120, // Increased size
    height: 120, // Increased size
    marginBottom: 15, // Increased space between image and text
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 22, // Increased font size
    color: "#fff",
  },
  profileContact: {
    fontSize: 18, // Increased font size
    color: "#fff",
  },
  profileEmail: {
    fontSize: 16, // Slightly increased size
    color: "#fff",
  },
  drawerItemLabel: {
    color: "#fff", // Set label color to white
    fontSize: 18, // Increased font size
    marginLeft: -10, // Slightly adjusted label positioning
  },
});
