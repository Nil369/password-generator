import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      {/* Developer Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/images/Formal Pic.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.developerName}>Akash Halder</Text>
        <Text style={styles.developerInfo}>
          B.Tech CSE-AIML Student at Brainware University
        </Text>
      </View>

      {/* Developer Info Section */}
      <View style={styles.additionalInfo}>
        <Text style={styles.sectionTitle}>About the Developer</Text>
        <Text style={styles.developerBio}>
          Passionate about web development and AI, Akash enjoys creating solutions
          that make people's lives easier. With skills in React Native, Django, and
          more, he’s committed to building secure and reliable applications.
        </Text>
      </View>

      {/* App Description Section */}
      <View style={styles.descriptionSection}>
        <Text style={styles.appTitle}>Password Generator</Text>
        <Text style={styles.appDescription}>
          This app generates secure, custom-length passwords to enhance online
          security. Select from uppercase letters, lowercase letters, numbers, and
          symbols to create a strong password tailored to your needs. Perfect for
          protecting sensitive accounts and keeping your information safe!
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  developerName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  developerInfo: {
    fontSize: 16,
    color: "#666",
  },
  descriptionSection: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  appDescription: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    textAlign: "center",
  },
  additionalInfo: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#74B9FF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  developerBio: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
});
