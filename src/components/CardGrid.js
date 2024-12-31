import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

const cardBackgrounds = [
  "https://thumbs.dreamstime.com/b/anime-young-female-woman-black-hair-sitting-alone-room-working-her-computer-s-wearing-orange-top-341384759.jpg",
  "https://png.pngtree.com/thumb_back/fw800/background/20220817/pngtree-geeky-businessman-using-megaphone-to-make-a-loud-announcement-in-composite-image-photo-image_19539804.jpg",
  "https://img.freepik.com/premium-vector/school-boy-standing-by-growing-chart-with-books-graduate-cap-kid-achieving-graduation-flat-vector-illustration-success-education-concept-banner-website-design-landing-web-page_179970-7013.jpg?semt=ais_hybrid",
  "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
];

export default function CardGrid() {
  const cards = [
    { id: 1, title: "Today's Homework", icon: "book-open-page-variant" },
    { id: 2, title: "Announcement", icon: "car-brake-alert" },
    { id: 3, title: "Performance", icon: "format-list-checks" },
    { id: 4, title: "Profile", icon: "account-circle" },
  ];

  const iconAnimations = useRef(cards.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    iconAnimations.forEach((anim, index) => {
      Animated.sequence([
        Animated.delay(index * 200), // Stagger the animation
        Animated.spring(anim, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [iconAnimations]);

  return (
    <LinearGradient
      colors={["#fff", "#fff"]}
      style={styles.container}
    >
      <Text style={styles.heading}>Explore Features</Text>
      <Text style={styles.subheading}>
        Discover tools to enhance your experience.
      </Text>

      <View style={styles.cardsContainer}>
        {cards.map((card, index) => (
          <Pressable
            key={card.id}
            style={({ pressed }) => [
              styles.cardWrapper,
              pressed && { transform: [{ scale: 0.95 }] },
            ]}
          >
            <ImageBackground
              source={{ uri: cardBackgrounds[index] }}
              style={styles.card}
              imageStyle={{ borderRadius: 20 }}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]}
                style={styles.overlay}
              />
              <Animated.View
                style={[
                  styles.iconContainer,
                  { transform: [{ scale: iconAnimations[index] }] },
                ]}
              >
                <MCI name={card.icon} size={64} color="#fff" style={styles.icon} />
              </Animated.View>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </ImageBackground>
          </Pressable>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subheading: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardWrapper: {
    width: "46%",
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  card: {
    width: "100%",
    height: width * 0.55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  iconContainer: {
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 20,
    borderRadius: 50,
  },
  icon: {
    color: "#fff",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
  },
});
