import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Animated, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon library

export default function Banner() {
  const [targetDate, setTargetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [shakeAnimation] = useState(new Animated.Value(0)); // Create animation value for shake effect

  const scale = new Animated.Value(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
      triggerShakeEffect(); // Trigger shake effect on the icon when timer updates
    }, 1000); // Update every second

    // Add pulsating animation for effect
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.05,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    return () => clearInterval(timer);
  }, [targetDate]); // Recalculate timeLeft when targetDate changes

  function getTargetDate() {
    const date = new Date();
    date.setDate(date.getDate() + 100); // 100 days from now
    return date;
  }

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  // Function to trigger the shake animation on the alarm icon
  function triggerShakeEffect() {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10, // Move to the right
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10, // Move to the left
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0, // Return to original position
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://cdn.dribbble.com/users/3239985/screenshots/14615561/media/0bd4e805fc88b74ff1028bb0af614bb8.gif' }} // New GIF URL
        style={[styles.bannerContainer, { transform: [{ scale: 1 }] }]}
        resizeMode="cover" // Adjust the GIF to cover the area of the container
      >
        <View style={styles.leftSide}>
          <Text style={styles.leftText}>Are You Prepared?</Text>
        </View>

        {/* Divider between left and right side */}
        <View style={styles.divider} />

        <View style={styles.rightSide}>
          <View style={styles.timerWrapper}>
            {/* Apply the shake animation only to the alarm icon */}
            <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
              <Icon name="bell" size={40} color="#FFD700" style={styles.alarmIcon} />
            </Animated.View>
            <View style={styles.timerTextWrapper}>
              <View style={styles.timerUnit}>
                <Text style={styles.timerText}>{timeLeft.days}</Text>
                <Text style={styles.timerSubText}>Days</Text>
              </View>
              <View style={styles.timerUnit}>
                <Text style={styles.timerText}>{timeLeft.hours}</Text>
                <Text style={styles.timerSubText}>Hours</Text>
              </View>
              <View style={styles.timerUnit}>
                <Text style={styles.timerText}>{timeLeft.minutes}</Text>
                <Text style={styles.timerSubText}>Minutes</Text>
              </View>
              <View style={styles.timerUnit}>
                <Text style={styles.timerText}>{timeLeft.seconds}</Text>
                <Text style={styles.timerSubText}>Seconds</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 7,
  },
  bannerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: 'row', // Split into two parts horizontally
    width: Dimensions.get("window").width - 10,
    height: 250,
    backgroundColor: "#ff6347", // Background color will be overridden by ImageBackground
    shadowColor: "#000", // Shadow to make it pop
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 15, // Android shadow
  },
  leftSide: {
    flex: 1, // Take up half the space
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the left
    paddingLeft: 20,
  },
  leftText: {
    fontSize: 28, // Larger text
    fontWeight: "bold",
    color: "#fff",
  },
  rightSide: {
    flex: 1, // Take up the other half
    justifyContent: 'center',
    alignItems: 'flex-end', // Align timer text to the right
    paddingRight: 20,
  },
  timerWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  alarmIcon: {
    marginBottom: 10, 
    color: '#FFD700', 
  },
  timerTextWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  timerUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timerText: {
    fontSize: 32,
    color: "#fff", 
    fontFamily: "Georgia", 
    fontWeight: "bold",
    marginRight: 5,
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  timerSubText: {
    fontSize: 14, 
    fontWeight:100,
    fontWeight: "normal", 
    color: "#000", 
  },
  divider: {
    width: 1, // Thin divider
    backgroundColor: "#fff", // White color for the divider
    height: 180, // Make it taller to cover most of the banner
    marginHorizontal: 10, // Space between the sides
  },
});
