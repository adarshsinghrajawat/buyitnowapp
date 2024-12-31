import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

// Get device width and height
const { width, height } = Dimensions.get("window");

export default function Footer() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* Footer with 3 Tabs */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "home" && styles.activeTab]}
          onPress={() => handleTabChange("home")}
        >
          <MCI name="home" size={32} color={activeTab === "home" ? "#000" : "#fff"} />
          <Text style={[styles.tabText, activeTab === "home" && styles.activeTabText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "search" && styles.activeTab]}
          onPress={() => handleTabChange("search")}
        >
          <MCI name="magnify" size={32} color={activeTab === "search" ? "#000" : "#fff"} />
          <Text style={[styles.tabText, activeTab === "search" && styles.activeTabText]}>Homework</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === "profile" && styles.activeTab]}
          onPress={() => handleTabChange("profile")}
        >
          <MCI name="account" size={32} color={activeTab === "profile" ? "#000" : "#fff"} />
          <Text style={[styles.tabText, activeTab === "profile" && styles.activeTabText]}>Assignments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Keeps the footer at the bottom of the screen
    paddingHorizontal: 10,
  },
  footer: {
    backgroundColor: "#000", // Dark background for a modern look
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15, // Increased vertical padding for better touch targets
    height: 90, // Increased height for better UI
    borderTopWidth: 1,
    borderTopColor: "#333", // Dark border for separation
    elevation: 5, // Shadow for depth on Android
    //borderRadius: 15, // Rounded corners for a softer, premium look
    position: "absolute", // Fix the footer at the bottom
    bottom: 0, // Ensure it stays at the bottom
    left: 0, // Ensure it spans the full width
    width: width, // Full screen width
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 3, // Each tab takes one-third of the footer width
    paddingVertical: 10, // More padding for larger touch targets
    borderRadius: 15, // Rounded corners for each tab
    transition: "all 0.3s ease", // Smooth transition when the tab is pressed
  },
  activeTab: {
    backgroundColor: "#D9B354", // Gold color for the active tab
    transform: [{ scale: 1.1 }], // Slight scale effect when active for a more interactive feel
  },
  tabText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500", // Slightly bold text for readability
    letterSpacing: 1, // Added letter spacing for better text spacing
  },
  activeTabText: {
    color: "#000", // Black text for active state
    fontWeight: "700", // Bold text for active state
    textTransform: "uppercase", // Uppercase text for emphasis
  },
});
