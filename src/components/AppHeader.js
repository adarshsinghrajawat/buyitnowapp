import React from "react";
import { Image, Dimensions, View, StyleSheet, Pressable } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function AppHeader(props) {
  const navigation = useNavigation();

  return (
    <LinearGradient
    colors={["#b1dbe7", "#d4ebf0", "#d9b354"]} // Vibrant gradient colors
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.appBar}>
        {/* Menu Icon */}
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={({ pressed }) => [
            styles.iconContainer,
            pressed && styles.iconPressed,
          ]}
        >
          <MCI name="menu" size={36} color="#000" />
        </Pressable>

        {/* Logo */}
        <Image
          style={styles.logo}
          source={require("../../assets/bhautikiplus.png")}
        />

        {/* Account Icon */}
        <Pressable
          onPress={() => console.log("Account Icon Pressed")}
          style={({ pressed }) => [
            styles.iconContainer,
            pressed && styles.iconPressed,
          ]}
        >
          <MCI name="account" size={36} color="#000" />
        </Pressable>
      </View>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: height * 0.12, // Increased height for a bold look
  },
  appBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent background
  },
  iconPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Brighter feedback on press
  },
  logo: {
    resizeMode: "contain",
    width: 150, // Larger logo for emphasis
    height: 80,
  },
});
